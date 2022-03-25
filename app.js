const express = require('express');
const port = process.env.PORT || 5000;
const cors = require('cors')
const axios = require('axios')
const app = express();

app.use(cors());

app.get('/', (req, res) => {

    const jsonObject = { user: 'user', password: '123' }
    axios.post('https://job-manager-xb5oq.ondigitalocean.app/auth/login', jsonObject)
        .then((response) => {

            axios.get('https://job-manager-xb5oq.ondigitalocean.app/auth/check-auth', {
                headers: {
                    Authorization: response.data.accessToken
                }
            }).then((nested_response) => {
                console.log(nested_response.data)
                res.send(nested_response)
            })

        }, (error) => {
            console.log(error);
        });

})

app.listen(port, () => {
    console.log('App Listening on Port ', port);
})