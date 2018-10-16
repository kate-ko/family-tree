let User = require("../../dataAccess/userModel");
let Parent = require("../../dataAccess/parentModel");
let express = require('express');
let bodyParser = require('body-parser');
const path = require('path')
const router = express.Router()

router.get('/users/down/:userName', (req, res) => {
  let { userName } = req.params
  User.findAll({
    attributes: ['id', 'name'],
    include: [{
      attributes: ['childId'],
      model: Parent,
      as: "children",
      include: [{
        model: User,
        as: "child"
      }]
    }],
    where: { name: userName }
  }).then(user => {
    res.send(user)

  }).error((err) => {
    console.error(err);
    res.status(500).send(err)
  })
})

router.post('/users', (req, res) => {
  console.log("hello")
  /*User.create({
    id: "8",
    name: "Dustin",
    imgUrl: "sdfsfdsfd"
  }).then(user => {
    res.send(user)

  }).error((err) => {
    console.error(err);
    res.status(500).send(err)
  })*/
})

router.get('/test', (req, res) => {
  res.send("ok")
})

module.exports = router

