const express = require('express');
const app = express();

app.get('/', (reqest, response) => {
    response.send('Hello World')
})

app.listen(8080, () => {
    console.log('Start localhost at port 8080')
})
