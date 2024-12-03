const express = require(`express`)
const app = express()
const PORT = 9000
const cors = require(`cors`)
app.use(cors())

const userRoute = require(`./routes/user.route`)
app.use(`/api/users`, userRoute)

const auth = require(`./routes/auth.route`)
app.use(`/api/auth/login`, auth)

const attendaceRoute = require(`./routes/attendance.route`)
app.use(`/api/attendance`, attendaceRoute)

app.listen(PORT, () => {
    console.log(`Server Program Presensi Online Berjalan di Port ${PORT}`);
})