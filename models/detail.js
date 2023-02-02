'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // relasi detail -> transaksi
      // key : id_transaksi
      // parent : transaksi, child: detail
      // tipe: one to many
      this.belongsTo(models.transaksi, {
        foreignKey: "id_transaksi",
        as: "transaksi"
      })

      // relasi detail -> menu
      // key : id_menu
      // parent : menu, child: detail
      // tipe: one to many
      this.belongsTo(models.menu, {
        foreignKey: "id_menu",
        as: "menu"
      })

    }
  }
  detail.init({
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
    modelName: 'detail',
    tableName: 'detail'
  });
  return detail;
};