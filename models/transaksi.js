'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // relasi transaksi -> user
      // key : id_user
      // parent : user, child: transaksi
      // tipe: one to many
      this.belongsTo(models.user, {
        foreignKey: "id_user",
        as: "user"
      })

      // relasi transaksi -> meja
      // key : id_meja
      // parent : meja, child: transaksi
      // tipe: one to many
      this.belongsTo(models.meja, {
        foreignKey: "id_meja",
        as: "meja"
      })

    }
  }
  transaksi.init({
    id_transaksi:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tgl_transaksi: DataTypes.DATE,
    id_user: DataTypes.INTEGER,
    id_meja: DataTypes.INTEGER,
    nama_pelanggan: DataTypes.STRING,
    status: DataTypes.ENUM("belum_bayar","lunas")
  }, {
    sequelize,
    modelName: 'transaksi',
    tableName: 'transaksi'
  });
  return transaksi;
};