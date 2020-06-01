import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('userasdasds');
    response.json([
        'gabriel'
    ]);
});

app.listen(3000);