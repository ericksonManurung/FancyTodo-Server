'use strict';
const {
  Model
} = require('sequelize');
const backDate = require('../helpers/backDate')
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Title tidak boleh kosong'
        },
        len:{
          args: 3,
          msg: 'Title Minimal 3 karater'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Description tidak boleh kosong'
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Status tidak boleh kosong'
        }
      }
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty:{
          args: true,
          msg: 'due_date tidak boleh kosong'
        },
        isAfter: {
          args: backDate(),
          msg : 'Tidak bisa input tanggal atau hari kemarin'
        }
        // isBackDate(val){
        //   if(!val){
        //     throw new Error('Input Tanggal hari ini')
        //   }else{
        //     let valDay = val.getDate()
        //     let valMonth = val.getMonth() + 1
        //     let valYear = val.getFullYear()

        //     let date = new Date()
        //     let day = date.getDate()
        //     let month = date.getMonth() + 1
        //     let year = date.getFullYear()

        //     if(valYear !== year || valMonth !== month || valDay < day) {
        //       throw new Error('Tidak bisa input tanggal kemarin')
        //     }
        //   }
        // }
      }
    },
    UserId: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          args: true,
          msg: 'UserId tidak boleh kosong'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Todo',
  });
  Todo.associate = function(models){
    Todo.belongsTo(models.User)
  }
  return Todo;
};