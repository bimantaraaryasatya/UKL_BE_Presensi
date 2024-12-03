const express = require(`express`)
const md5 = require(`md5`)
const jwt = require(`jsonwebtoken`)
const userModel = require(`../models/index`).user

// membuat fungsi untuk proses mengautentikasi
const authenticate = async (request, response) => {
    // Membuat objek dataLogin dengan data dari request body
    let dataLogin = {
        username: request.body.username,
        password: md5(request.body.password)
    }

    // cek data username dan password di tabel user
    let dataUser = await userModel.findOne({where:dataLogin})

    if (dataUser) {
        let payLoad = JSON.stringify(dataUser) // Payload untuk menghasilkan token, payload harus bertipe string. Sedangkan dataUser adalah object, maka dari itu kita ubah ke string
        let secret = `mokleters` // 
        let token = jwt.sign(payLoad, secret)
    
        return response.json({
            status: `success`,
            message: `Login berhasil`,
            token: token
        })
    }

    // jika data user tidak ada
    return response.json({
        status: `failed`,
        message: `Login gagal. Username dan Password salah`
    })
}

const authroize = (request, response, next) => {
    let headers = request.headers.authorization

    let tokenKey = headers && headers.split(" ")[1] // p

    if (tokenKey == null) {
        return response.json({
            status: `failed`,
            message: `Unauthorized User`
        })
    }

    let secret = `mokleters`

    jwt.verify(tokenKey, secret, (error, user) => {
        if (error) {
            return response.json({
                status: `failed`,
                message: `Token Salah`
            })
        }
    })
    next()
}

module.exports = { authenticate, authroize }