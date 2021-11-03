'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Posts.hasMany(models.Comments);
      models.Posts.belongsTo(models.Users, {
        foreignKey:{
          allowNull: false
        },
        onDelete: 'CASCADE'
      })
    }
  };
  Posts.init({
    userId: DataTypes.INTEGER,
    texte: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    usersLiked: DataTypes.STRING,
    likes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};