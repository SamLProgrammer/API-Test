const express = require('express');
const port = process.env.PORT || 5000;
//const axios = require('axios')
const app = express();

app.get('/', (req, res) => {

    const json_object = { user: 'user', password: '123' }
    res.send(json_object)
    // axios.post('https://job-manager-xb5oq.ondigitalocean.app/auth/login', json_object)
    //     .then((response) => {

    //         axios.get('https://job-manager-xb5oq.ondigitalocean.app/auth/check-auth', {
    //             headers: {
    //                 Authorization: response.data.accessToken
    //             }
    //         }).then((nested_response) => {
    //             console.log(nested_response.data)
    //             res.send(nested_response)
    //         })

    //     }, (error) => {
    //         console.log(error);
    //     });

})

app.listen(port, () => {
    console.log('App Listening on Port ', port);
})