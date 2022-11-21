const path=require('path')
const express=require('express')
const dotenv=require('dotenv')
const morgan=require('morgan')
const exphbs=require('express-handlebars')
const passport=require('passport')
const session=require('express-session')
const connectDB=require('./config/db')

//intialize app
const app=express()

//Handlebars
app.engine('.hbs',exphbs.engine({
    defaultLayout:'main',
    extname:'.hbs'
}))
app.set('view engine','.hbs')

//Port
const PORT=process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))