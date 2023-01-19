'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // relasi detail_transaksi -> transaksi
      // key : id_transaksi
      // parent : transaksi, child: detail_transaksi
      // tipe: one to many
      this.belongsTo(models.transaksi, {
        foreignKey: "id_transaksi",
        as: "transaksi"
      })

      // relasi detail_transaksi -> menu
      // key : id_menu
      // parent : menu, child: detail_transaksi
      // tipe: one to many
      this.belongsTo(models.menu, {
        foreignKey: "id_menu",
        as: "menu"
      })

    }
  }
  detail_transaksi.init({
    id_detail:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_transaksi: DataTypes.INTEGER,
    id_menu: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detail_transaksi',
    tableName: 'detail_transaksi'
  });
  return detail_transaksi;
};