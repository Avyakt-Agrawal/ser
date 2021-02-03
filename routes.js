const express = require('express')
const users = express.Router()
const cors = require('cors')


users.use(cors())


users.post('/apply', (req, res) => {
  const today = new Date()
  const userData = {
    user_name: req.body.user_name,  
    email: req.body.email,
    mobile:req.body.mobile,
    created: today
  }

  User.findOne({email: req.body.email})
  .then(user => {User.create(userData)})
  .then(user => {
    s.json({ status: user.user_name + ' Thanks for applying, we will contact you soon'}) 
  })
  .catch(err => {
    res.send('error: '+ err)
  })
.catch(err => {
  res.send('error: ' + err)
})  

  
})

module.exports = users
