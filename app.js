const http = require('http');
const path = require('path');
const express = require('express');
const app = express();

// allows to parse video
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// Public folder
app.use(express.static(path.join(__dirname, 'public')));

// Add routes
adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);

shopRoutes = require('./routes/shop');
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

const server = http.createServer(app);
server.listen(3000);
