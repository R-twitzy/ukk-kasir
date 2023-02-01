const express = require(`express`)
const app = express()

app.use(express.json())

// call mejaController
let mejaController = require("../controllers/mejaController")

let authorization = require("../middlewares/authorization")

// endpoint get data meja
app.get("/", authorization.authorization, mejaController.getDataMeja)

// endpoint add data meja
app.post("/", authorization.authorization, mejaController.addDataMeja)

// endpoint edit meja
app.put("/:id_meja", authorization.authorization, mejaController.editDataMeja)

// endpoint delete meja
app.delete("/:id_meja", authorization.authorization, mejaController.deleteDataMeja)

module.exports = app