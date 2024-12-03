const Joi = require(`joi`) // Memanggil Joi untuk memvalidasi data yang diinput oleh user 

const validateAttendance = (request, response, next) => {
    const rules = Joi
        .object()
        .keys({
            userID: Joi.number().integer().required(), // userID berupa integer dan tidak boleh kosong
            date: Joi.string().pattern(/^\d{4}-\d{2}-\d{2}$/).required(), // format penulisan YYYY-MM-DD
            time: Joi.string().pattern(/^\d{2}:\d{2}:\d{2}$/).required(), // format penulisan HH-MM-SS
            status: Joi.string().valid(`hadir`, `izin`, `sakit`, `alpha`) // status hanya tersedia hadir, izin, sakit, alpha
        })
        .options({abortEarly: false}) // menampilkan semua error sekaligus jika terdapat lebih dari satu error

    let {error} = rules.validate(request.body) // Validasi request body berdasarkan aturan yang terdapat pada variable rules

    if (error != null) {
        // Jika terdapat error, format pesan error dan kirimkan response dengan status 422
        let errMessage = error.details.map(it => it.message).join(",")
        
        return response.status(422).json({
            succes: false,
            message: errMessage
        })
    }

    // Jika tidak ada error, lanjutkan ke route handler atau middleware selanjutnya
    next()
}

module.exports = { validateAttendance }