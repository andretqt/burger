//here is where i create my table and export it
module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: DataTypes.STRING,
        eaten: DataTypes.BOOLEAN
    });
    return Burger;
};