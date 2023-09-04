const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();

app.engine('hbs', engine({
    extname : 'hbs',
    defaultLayout : 'main',
    layoutsDir : path.join(__dirname, 'views','layouts'),
    partialsDir : path.join(__dirname, 'views', 'partials')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res) => {
    res.render('home')
})

app.use((req,res,next) => {
    res.render('errors/404', { title : "Page Not Found"})
})

const PORT = process.env.PORT || 3000
app.listen(port, () => console.log(`Server listening on port ${PORT}`))