import express from 'express';

const app = express();

app.get('/',(request, response) => {
    return response.json({'hello':'world'})
})

app.post('/users',(request, response) => {
    return response.json({'kkk':'lll'})
})

app.listen(3333, ()=> console.log('server is running in port 3333'));