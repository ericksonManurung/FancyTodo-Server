'use strict';
const {
  Model
} = require('sequelize');
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
      validate:{
        isEmpty(val){
          if(!val){
            throw new Error('Title tidak boleh kosong')
          }
        },
        valLength(val){
          if(val.length < 3){
            throw new Error('Title minimal 3 karakter')
          }
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate:{
        isEmpty(val){
          if(!val){
            throw new Error('description tidak boleh kosong')
          }
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      validate:{
        isEmpty(val){
          if(!val){
            throw new Error('Status tidak boleh kosong')
          }
        }
      }
    },
    due_date: {
      type: DataTypes.DATE,
      validate: {
        isEmpty(val){
          if(!val){
            throw new Error('due_date tidak boleh kosong')
          }
        },
        isBackDate(val){
          let valDay = val.getDate()
          let valMonth = val.getMonth() + 1
          let valYear = val.getFullYear()

          let date = new Date()
          let day = date.getDate()
          let month = date.getMonth() + 1
          let year = date.getFullYear()

          if(valYear !== year || valMonth !== month || valDay < day) {
            throw new Error('Date tidak bisa backdate')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};