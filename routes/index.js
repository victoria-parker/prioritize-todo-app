const express=require('express')
const router=express.Router()
const {ensureAuth, ensureGuest}=require('../middleware/auth')

//Login
//get
router.get('/',ensureGuest,(req,res)=>{
    res.render('login',{
        layout:'login'
    })
})

//Dashboard
//get
router.get('/dashboard',ensureAuth,(req,res)=>{
    res.render('dashboard')
})

module.exports=router