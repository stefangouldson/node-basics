const http = require('http');
const path = require('path');
const express = require('express');
const app = express();

const expressHbs = require('express-handlebars');

app.engine('hbs', expressHbs);
// app.set('view engine', 'pug');
app.set('view engine', 'hbs');
app.set('views', 'views'); // not needed as is this by default

// allows to parse video
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// Public folder
app.use(express.static(path.join(__dirname, 'public')));

// Add routes
adminData = require('./routes/admin');
app.use('/admin', adminData.routes);

shopRoutes = require('./routes/shop');
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {docTitle: 'Page Not Found'});
})

const server = http.createServer(app);
server.listen(3000);
