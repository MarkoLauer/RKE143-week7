const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const pumpkinData = require('./data/pumpkin.json');
const broccoliData = require('./data/broccoli.json');
const nodeData = require('./data/nodejs.json');

app.use(bodyParser.json());

app.get('/pumpkin', (req, res) =>{
    const randomIndex = Math.floor(Math.random() * pumpkinData.Categories['Pumpkin Drinks'].length); //Math.floor ümardab tulemuse
    const randomDrink = pumpkinData.Categories['Pumpkin Drinks'][randomIndex];

    res.status(200).json({randomDrink});
} );



app.post('/rke143', (req, res) =>{
    console.log(req.body);
    if(req.body.username !== 'rke' || req.body.password !== '143') {
        res.status(200).json('Invalid credentials');
    }else {
        res.status(200).json({nodeData});
    }


});


app.listen(3000, () => {
     
    //console.log(pumpkinData.Categories['Pumpkin Drinks'][randomIndex]);

} )