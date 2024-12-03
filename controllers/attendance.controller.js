const { date } = require("joi")
const { where } = require("sequelize")
const userModel = require(`../models/index`).user
const attendaceModel = require(`../models/index`).presensi
const { Op, fn, col, sequelize } = require('sequelize');

exports.addPresensi = async (request, response) => {
    try{
        // Ambil  data dari request body
        let dataPresensi = {
            userID: request.body.userID,
            date: request.body.date,
            time: request.body.time,
            status: request.body.status
        }

        let userExists = await userModel.findOne({where: {id: dataPresensi.userID}}) // Cek keberadaan id di tabel Users 

        // Kembalikan pesan jika id tidak ditemukan
        if (!userExists) {
            return response.json({
                status: `failed`,
                message: `User dengan ID ${dataPresensi.userID} tidak ditemukan atau tidak terdaftar`
            })
        }

        // memasukan data ke tabel
        attendaceModel.create(dataPresensi)
            .then(result => {
                return response.json({
                    status: `success`,
                    message: `Presensi berhasil dicatat`,
                    data: {
                        attendace_id : result.id,
                        userID : result.userID,
                        date: result.date.toISOString().split('T')[0], // Output: ["2024-03-12", "00:00:00.000Z"] Dan mengambil index ke 0
                        time: result.time,
                        status: result.status
                    }
                })
            })
            .catch(error => {
                return response.json({
                    status: `failed`,
                    message: error.message
                })
            })

    }catch(error){
        console.log(error);
        return response.status(500).json({
            status: `failed`,
            message: `Terjadi kesalahan pada server`
        })
    }
}

exports.getHistory = async (request, response) => {
    try{
        let userID = request.params.userID // Mengambil id dari url

        // Tangani error jika id tidak ditemukan
        if (!userID) {
            return response.json({
                status: `failed`,
                message: `User ID harus disertakan`
            })
        }

        // Mencari history dari id yang diinputkan oleh user di tabel presensi
        let history = await attendaceModel.findAll({
            where: {
                userID: userID,
            },
            order: [['date', 'DESC'], ['time', 'DESC']] // mengurutkan berdasarkan date dan time secara 'DESC' atau descending
        })

        // Jika history tidak ditemukan
        if (history.length === 0) {
            return response.json({
                status: `failed`,
                message: `Riwayat presensi tidak ditemukan`
            })
        }

        // Formatkan data history menjadi array of object
        const formattedHistory = history.map(record => ({
            attendace_id: record.id,
            date: record.date.toISOString().split('T')[0],
            time: record.time,
            status: record.status
        }))

        // Jika history ditemukan
        return response.json({
            status: `success`,
            data: formattedHistory
        })
    }catch(error){
        console.error(error);
        return response.json({
            status: `failed`,
            message: `Terjadi kesalahan pada server`
        })
        
    }
}

exports.getAttendanceSummary = async (request, response) => {
    try {
        // Ambil user id dari parameter url
        let userID = request.params.userID
        
        // Mengambil bulan dan tahun dari tanggal saat ini
        let currentDate= new Date()
        let month = currentDate.getMonth() + 1
        let year = currentDate.getFullYear()

        // Format bulan menjadi angka 2 digit
        month = month.toString().padStart(2, '0')

        // Tentukan rentang tanggal awal dan akhir bulan
        let startDate = `${year}-${month}-01`
        let endDate = new Date(year, month, 0).toISOString().split('T')[0] 

        console.log(`Start Date: ${startDate}, End Date: ${endDate}`);

        let attendanceSummary = await attendaceModel.findAll({
            where: {
                userID: userID,
                date: {
                    [Op.between]: [
                        startDate, 
                        endDate
                    ]
                }
            },
            attributes: [
                'status',
                [attendaceModel.sequelize.fn('COUNT', 'status'), 'count']
            ],
            group: ['status']
        })

        console.log('Attendance Summary:', attendanceSummary);

        let summary = {
            hadir: 0,
            izin: 0,
            sakit: 0,
            alpha: 0
        }

        attendanceSummary.forEach(record => {
            summary[record.status] = record.dataValues.count
        });

        return response.json({
            status: `success`,
            data: {
                user_id: parseInt(userID),
                month: `${month}-${year}`,
                attendance_summary: summary
            }
        })
    } catch (error) {
        console.log(error);
        return response.json({
            status: `failed`,
            message: `Terjadi kesalahan pada server`
        })
        
    }
}