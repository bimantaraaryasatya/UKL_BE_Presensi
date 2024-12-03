const Joi = require(`joi`) 

const validateUser = (request, response, next) => {
    const rules = Joi
        .object()
        .keys({
            // nama dibutuhkan
            name: Joi.string().required(),
            username: Joi.string().required(),
            password: Joi.string().required(),
            role: Joi.string().valid(`Siswa`, `Karyawan`)
        })
        .options({abortEarly: false})

    let {error} = rules.validate(request.body)

    if (error != null) {
        let errMessage = error.details.map(it => it.message).join(",")
        
        return response.status(422).json({
            succes: false,
            message: errMessage
        })
    }

    next()
}

module.exports = { validateUser }