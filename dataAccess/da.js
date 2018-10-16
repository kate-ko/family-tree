const Sequelize = require("sequelize");

class dbConnect {
    constructor() {
        this.sequelize = new Sequelize(
            'mysql://sql7260634:jr7TKuXiIR@sql7.freesqldatabase.com:3306/sql7260634'
        );
        this.start();
    }
    start() {
        this.sequelize
            .authenticate()
            .then(() => {
                console.log("Connection has been established successfully.");
            })
            .catch(err => {
                console.error("Unable to connect to the database:", err);
            });
    }
}

const da = new dbConnect();
module.exports = da;