'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmpty(val){
          if(!val){
            throw new Error('Email tidak boleh kosong')
          }
        },
        isEmail: {
          args: true,
          msg:'Format harus email. ex: abc@gmail.com'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate:{
        isEmpty(val){
          if(!val){
            throw new Error('Password tidak boleh kosong')
          }
        },
        valLength(val){
          if(val.length < 6){
            throw new Error('Password minimal 6 karakter')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.associate = function(models) {
    User.hasMany(models.Todo)
  }
  return User;
};