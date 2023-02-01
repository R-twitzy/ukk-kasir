// memanggil file model untuk meja
let modelMeja = require("../models/index").meja

exports.getDataMeja = (request, response) => {
    modelMeja.findAll()
    .then(result => {
        return response.json(result)
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.addDataMeja = (request, response) => {
    // tampung data request
    let newMeja = {
        nomor_meja: request.body.nomor_meja,
        status_meja: request.body.status_meja,
    }

    modelMeja.create(newMeja)
        .then(result => {
            return response.json({
                message: `Data meja berhasil ditambahkan`
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
    }

exports.editDataMeja = (request, response) => {
    let id = request.params.id_meja
    let dataMeja = {
        nomor_meja: request.body.nomor_meja,
        status_meja: request.body.status_meja,
    }
    
    modelMeja.update(dataMeja, {where: {id_meja: id}})
        .then(result => {
            return response.json({
                message: `Data meja berhasil diedit`
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
    }

exports.deleteDataMeja = (request, response) => {
    let id = request.params.id_meja

    modelMeja.destroy({where: {id_meja: id}})
        .then(result => {
            return response.json({
                message: `Data meja berhasil dihapus`
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
    }