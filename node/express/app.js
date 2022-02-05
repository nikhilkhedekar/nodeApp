const express = require('express');


express().get('/', (req, res) => {
    res.send('Express Started');
}).listen(8080, () => { console.log('Hello Express') });