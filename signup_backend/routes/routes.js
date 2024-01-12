const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
const bcrypt = require('bcrypt')

router.post('/signup', async (request, response) =>{

   console.log("request", request.body)
   const saltPassword = await bcrypt.genSalt(10)
   const securePassword = await bcrypt.hash(request.body.password, saltPassword)

   const signedUpUser = new signUpTemplateCopy({
      fullName:request.body.fullName,
      userName:request.body.userName,
      email:request.body.email,
      password:securePassword
   })
   signedUpUser.save()
   .then(data =>{
      response.json(data)
   })
   .catch(error =>{
      response.json(error)
   })
})

router.post('/login', async (request, response) => {
   const email = request.body.email;
   const password = request.body.password;
   console.log(email)

   if (!email || !password) {
      console.log("Email and/or password is empty...");
  }
  response.json("success")
})

module.exports = router