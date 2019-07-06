const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Emidio');
})

app.listen(3000);
