module.exports = (sequelize, DataTypes)=> sequelize.define("User",{
    email:{
        type: DataTypes.STRING,
        unique: true,
    },
    passwrod:{
        type:DataTypes.STRING

    }

});
