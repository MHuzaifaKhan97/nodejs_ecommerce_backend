const express = require('express');
const app = express();

require('dotenv/config');

const api = process.env.API_URL;

// api/v1
app.get(`${api}/`,(req,res)=>{
    res.send('Server Started.');
})

app.listen(3000,() => {
    console.log(api);
    console.log('Successfully Server Started.!')
})