const express = require(`express`)
const app = express()

app.use(express.json())

// call transaksiController
let transaksiController = require("../controllers/transaksiController")

let authorization = require("../middlewares/authorization")

// endpoint get data transaksi
app.get("/", authorization.authorization, transaksiController.getDataTransaksi)

// endpoint get data transaksi
app.post("/tgl", authorization.authorization, transaksiController.filterTgl)

// endpoint add data transaksi
app.post("/", authorization.authorization, transaksiController.addDataTransaksi)

// endpoint edit transaksi
app.put("/:id_transaksi", authorization.authorization, transaksiController.editDataTransaksi)

// endpoint delete transaksi
app.delete("/:id_transaksi", authorization.authorization, transaksiController.deleteDataTransaksi)

module.exports = app