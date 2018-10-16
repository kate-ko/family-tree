const da = require("./da")
const Sequelize = require("sequelize");

const User = da.sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER, primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    imgUrl: {
        type: Sequelize.STRING
    },
} , {timestamps: false})

//User.sync()

module.exports = User;

