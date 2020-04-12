const express = require('express')
const path = require('path')
const expressHandlebars = require('express-handlebars') 

const app = express()

const PORT = process.env.PORT || 3012

const hbs = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'  
})

app.engine('hbs', hbs.engine) //register engine
app.set('view engine', 'hbs') //start using
app.set('views', 'views')


app.get('/', (req,res) =>{
    res.render('index') 
})

app.get('/about', (req,res) =>{
    res.render('about')
})

app.listen(PORT, ()=>{
    console.log(`Server is running ${PORT}`);
})