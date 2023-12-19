const express = require('express');
const app = express();
const cors = require('cors');
const port = 7000;

const categories = require('./data/data.json');
const chef = require('./data/AllData.json')

const corsConfig = {
    origin: 'https://delicate-cajeta-754e6b.netlify.app/',
    credentials: true,
    methods: [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE",
        "OPTIONS"
    ]
}
app.use(cors(corsConfig))
app.options("", cors(corsConfig))

app.get('/', (req,res) => {
    res.send('food recipe server is running...')
})

app.get('/categories', (req,res) =>{
    res.send(categories);
})

app.get('/chef', (req,res) => {
    res.send(chef);
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const recipe = chef?.find(c => c.id == id);
    res.send(recipe);
})

app.listen(port, () => {
    console.log(`food recipe API is running on port: ${port}`);
})