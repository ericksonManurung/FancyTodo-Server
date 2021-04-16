'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs')

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
        notEmpty:{
          args: true,
          msg: 'Email tidak boleh kosong'
        },
        isEmail: {
          args: true,
          msg:'Format harus email. example: abc@gmail.com'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          args: true,
          msg: 'Password tidak boleh kosong'
        },  
        len:{
          args: [6,10],
          msg: 'Password minimal 6 karakter'
        }
      }
    }
  }, {
    sequelize,
    hooks:{
      beforeCreate(dataPass){
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(dataPass.password, salt);
        dataPass.password = hash
      }
    },
    modelName: 'User',
  });
  User.associate = function(models) {
    User.hasMany(models.Todo)
  }
  return User;
};