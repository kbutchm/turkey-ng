const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const Shop = require('./models/shop');
const FakeDB = require('./models/fake-db');

const shopsRoutes = require('./routes/shops');

mongoose.connect(config.DB_URI, { useNewUrlParser: true }).then(() => {
    const fakeDb = new FakeDB();
    fakeDb.seedDb();
});

const app = express();

app.use('/api/v1/shops', shopsRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
    console.log('server running on port ' + PORT);
});