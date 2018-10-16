const da = require("./da");
let User = require("./userModel");
const Sequelize = require("sequelize");

const Parent = da.sequelize.define('Parents', {
    childId: {
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    parentId: {
        type: Sequelize.INTEGER,
        primaryKey:true
    }},{
    timestamps: false
})

User.hasMany(Parent, {foreignKey: 'ParentId', sourceKey: 'id' , as:"children"});
Parent.belongsTo(User, {foreignKey: 'ChildId', sourceKey: 'id' , as:"child"});

module.exports = Parent;