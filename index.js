const express = require('express')
const path = require('path')
const expressHandlebars = require('express-handlebars')
const homeRoutes = require('./routes/home') 
const coursesRoutes = require('./routes/courses') 
const addRoutes = require('./routes/add') 

const app = express()

const PORT = process.env.PORT || 3012

const hbs = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'  
})

app.engine('hbs', hbs.engine) //register engine
app.set('view engine', 'hbs') //start using
app.set('views', 'views')

app.use(express.static('public'))

app.use(homeRoutes)
app.use(coursesRoutes)
app.use(addRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is running ${PORT}`);
})