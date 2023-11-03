module.exports = (sequelize, DataTypes) => {
    const Bike = sequelize.define('Bike', {
    type: DataTypes.STRING,
    size: DataTypes.STRING,
    store: DataTypes.STRING,
    price: DataTypes.STRING
    })
    return Bike
   }