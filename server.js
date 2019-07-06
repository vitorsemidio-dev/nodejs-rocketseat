const express = require('express')
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();


// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });


requireDir('./src/models');
const Product = mongoose.model('Product');

app.get('/', (req, res) => {
    Product.create({
        title: 'Bleach',
        description: 'Bleach follows the adventures of Ichigo Kurosaki after he obtains the powers of a Soul Reaper',
        url: 'https://en.wikipedia.org/wiki/Bleach_(TV_series)',
    });

    return res.send('Hello mongoose');
});

app.listen(3000);
