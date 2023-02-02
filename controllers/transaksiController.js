// memanggil file model untuk transaksi
let modelTransaksi = require("../models/index").transaksi

exports.getDataTransaksi = (request, response) => {
    modelTransaksi.findAll()
    .then(result => {
        return response.json(result)
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.addDataTransaksi = (request, response) => {
    // tampung data request
    let newTransaksi = {
        tgl_transaksi: request.body.tgl_transaksi,
    }

    modelTransaksi.create(newTransaksi)
        .then(result => {
            return response.json({
                message: `Data transaksi berhasil ditambahkan`
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
    }

exports.editDataTransaksi = (request, response) => {
    let id = request.params.id_transaksi
    let dataTransaksi = {
        tgl_transaksi: request.body.tgl_transaksi,
    }
    
    modelTransaksi.update(dataTransaksi, {where: {id_transaksi: id}})
        .then(result => {
            return response.json({
                message: `Data transaksi berhasil diedit`
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
    }

exports.deleteDataTransaksi = (request, response) => {
    let id = request.params.id_transaksi

    modelTransaksi.destroy({where: {id_transaksi: id}})
        .then(result => {
            return response.json({
                message: `Data transaksi berhasil dihapus`
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
    }