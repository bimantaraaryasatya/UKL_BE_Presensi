const express = require(`express`)
const app = express()
app.use(express.json())
const { authroize } = require(`../controllers/auth.controller`)
let { validateAttendance } = require(`../middleware/attendance-validation`)
const attendaceController = require(`../controllers/attendance.controller`)
module.exports = app

app.post("/", [validateAttendance], [authroize], attendaceController.addPresensi)
app.get("/history/:userID", [authroize], attendaceController.getHistory)
app.get("/summary/:userID", [authroize], attendaceController.getAttendanceSummary)