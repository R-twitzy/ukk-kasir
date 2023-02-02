// memanggil file model untuk detail
let modelDetail = require("../models/index").detail

exports.getDataDetail = (request, response) => {
    modelDetail.findAll()
    .then(result => {
        return response.json(result)
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.addDataDetail = (request, response) => {
    // tampung data request
    let newDetail = {
        id_transaksi:request.body.id_transaksi,
        id_menu:request.body.id_menu,
        qty:request.body.qty,
        total:request.body.total,
    }

    modelDetail.create(newDetail)
        .then(result => {
            return response.json({
                message: `Data detail berhasil ditambahkan`
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
    }

exports.editDataDetail = (request, response) => {
    let id = request.params.id_detail
    let dataDetail = {
        id_transaksi:request.body.id_transaksi,
        id_menu:request.body.id_menu,
        qty:request.body.qty,
        total:request.body.total,
    }
    
    modelDetail.update(dataDetail, {where: {id_detail: id}})
        .then(result => {
            return response.json({
                message: `Data detail berhasil diedit`
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
    }

exports.deleteDataDetail = (request, response) => {
    let id = request.params.id_detail

    modelDetail.destroy({where: {id_detail: id}})
        .then(result => {
            return response.json({
                message: `Data detail berhasil dihapus`
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
    }