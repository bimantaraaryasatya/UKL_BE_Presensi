const express = require(`express`)
const app = express()
app.use(express.json())
const { authroize } = require(`../controllers/auth.controller`)
const userController = require(`../controllers/user.controller`)
let { validateUser } = require(`../middleware/user-validation`)
module.exports = app

app.post("/", [validateUser], [authroize], userController.addUser) // membuat route untuk menambah data user
app.put("/:idUser", [validateUser], [authroize], userController.updateUser) // membuat route untuk mengubah user
app.get("/:idUser", [authroize], userController.getUser) // membuat route untuk mengambil data user
app.delete("/:idUser", [authroize], userController.deleteUser) // membuat route untuk menghapus data user