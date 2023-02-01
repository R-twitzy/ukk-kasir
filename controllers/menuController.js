// memanggil file model untuk menu
let modelMenu = require("../models/index").menu

let path = require("path")
let fs = require("fs")

exports.getDataMenu = (request, response) => {
    modelMenu.findAll()
    .then(result => {
        return response.json(result)
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.addDataMenu = (request, response) => {
    if(!request.file){
        return response.json({
            message: `Tidak ada yg diupload`
        })
    }
    // tampung data request
    let newMenu = {
        nama_menu: request.body.nama_menu,
        jenis: request.body.jenis,
        deskripsi: request.body.deskripsi,
        harga: request.body.harga,
        image: request.file.filename
    }

    modelMenu.create(newMenu)
        .then(result => {
            return response.json({
                message: `Data menu berhasil ditambahkan`
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
    }

exports.editDataMenu = async (request, response) => {
    let id = request.params.id_menu
    let dataMenu = {
        nama_menu: request.body.nama_menu,
        jenis: request.body.jenis,
        deskripsi: request.body.deskripsi,
        harga: request.body.harga
    }

    if(request.file){
        // jika edit menyertakan image
        let menu = await modelMenu.findOne({ where: { id_menu: id} })
        let oldFileName = menu.image  

        // dellete file
        let location = path.join(__dirname, "../image", oldFileName)
        fs.unlink(location, error => console.log(error))

        // menyisipkan nama file baru ke dalam objek data menu
        dataMenu.image = request.file.filename
    }
    
    modelMenu.update(dataMenu, {where: {id_menu: id}})
        .then(result => {
            return response.json({
                message: `Data menu berhasil diedit`
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
    }

exports.deleteDataMenu = async (request, response) => {
    let id = request.params.id_menu

    // ambil dulu data filename yg akan dihapus
    let menu = await modelMenu.findOne({ where: {id_menu: id}})
    
    if(menu){
        let oldFileName = menu.image

        // delete file
        let location = path.join(__dirname,"../image", oldFileName)
        fs.unlink(location, error => console.log(error))
    }

    modelMenu.destroy({where: {id_menu: id}})
        .then(result => {
            return response.json({
                message: `Data menu berhasil dihapus`
            })
        })
        .catch(error => {
            return response.json({
                message: error.message
            })
        })
    }