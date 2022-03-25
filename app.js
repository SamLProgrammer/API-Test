const express = require('express');
const port = process.env.PORT || 5000;
const axios = require('axios')
const app = express();

app.use(express.static('public'));

app.listen(port, () => {
    console.log('App Listening on Port ', port);
})