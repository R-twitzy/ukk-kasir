const express = require(`express`)
const app = express()

app.use(express.json())

// call detailController
let detailController = require("../controllers/detailController")

let authorization = require("../middlewares/authorization")

// endpoint get data detail
app.get("/", authorization.authorization, detailController.getDataDetail)

// endpoint add data detail
app.post("/", authorization.authorization, detailController.addDataDetail)

// endpoint edit detail
app.put("/:id_detail", authorization.authorization, detailController.editDataDetail)

// endpoint delete detail
app.delete("/:id_detail", authorization.authorization, detailController.deleteDataDetail)

module.exports = app