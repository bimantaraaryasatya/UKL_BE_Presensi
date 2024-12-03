const userModel = require(`../models/index`).user
const md5 = require(`md5`) // memanggil md5 yang berfungsi untuk enkripsi password
const { where } = require("sequelize")

// membuat fungsi menambah user
exports.addUser = (request, response) => {
    // Membuat objek newUser dengan data dari request body    
    let newUser = {
        name: request.body.name,
        username: request.body.username,
        password: md5(request.body.password),
        role: request.body.role 
    }


    console.log(newUser);
    

    // memasukan data ke table users
    userModel.create(newUser)
        .then(result => {
            // jika proses memasukan data berhasil
            return response.json({
                status: `success`,
                message: `Pengguna berhasil ditambahkan`,
                data: {
                    id: result.id,
                    name: result.name,
                    username: result.username,
                    role: result.role
                }
            })
        })
        .catch(error => {
            // kalau proses memasukan data gagal
            return response.json({
                status: `failed`,
                message: error.message
            })
        })
}

// membuat fungsi mengubah data user
exports.updateUser = async (request, response) => {
    try {
        // Membuat objek dataUser yang baru dengan data dari request body
        let dataUser = {
            name: request.body.name,
            username: request.body.username,
            password: md5(request.body.password),
            role: request.body.role
        };

        // Mengambil id user yang akan diubah
        let idUser = request.params.idUser;

        // Proses update data 
        let [rowsUpdated] = await userModel.update(dataUser, { where: { id: idUser } });

        if (rowsUpdated === 0) {
            // Jika tidak ada baris yang diperbarui
            return response.status(404).json({
                status: `failed`,
                message: `User not found or no changes made`
            });
        }

        // Ambil data terbaru setelah update
        let updatedUser = await userModel.findOne({ where: { id: idUser } });

        // Kirim respons dengan data terbaru
        return response.json({
            status: `success`,
            message: `Pengguna berhasil diubah`,
            data: {
                id: updatedUser.id,
                name: updatedUser.name,
                username: updatedUser.username,
                role: updatedUser.role
            }
        });
    }catch (error) {
        // Tangani error
        return response.json({
            status: `failed`,
            message: error.message
        })
    }
}

exports.getUser = (request, response) => {
    // mengambil data user yang akan ditampilkan 
    let idUser = request.params.idUser 

    // mencari member berdasarkan id
    userModel.findOne({where: {id: idUser}})
        .then(result => {
            if (!result) {
                // jika user tidak ketemu
                return response.json({
                    status: `failed`,
                    message: `Data user tidak ditemukan`
                })
            }

            // jika user ditemukan, kembalikan / tampilkan data member
            return response.json({
                status: `success`,
                message: `User ditemukan`,
                data: {
                    id: result.id,
                    name: result.name,
                    username: result.username,
                    role: result.role
                }
            })
        })
        .catch(error => {
            // Tangani error
            return response.json({
                status: `failed`,
                message: error.message
            })
        })
}

exports.deleteUser = (request, response) => {
    let idUser = request.params.idUser

    userModel.destroy({ where: {id:idUser}})
        .then(result => {
            return response.json({
                status: `success`,
                message: `Data user berhasil dihapus`
            })
        })
        .catch(error => {
            return response.json({
                status: `failed`,
                message: error.message
            })
        })
}