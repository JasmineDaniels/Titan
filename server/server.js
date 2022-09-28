//import express from 'express'
const express = require('express')
require('dotenv').config()
//import Email from "./Email.js"
const Email = require('./Email.js')
const path = require('path')
//const root = require('path').join(__dirname, 'client', 'build')
//import cors from 'cors'
const cors = require('cors')
//dotenv.config()

const PORT = process.env.PORT || 3001
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors())

// One node process
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))
    app.use(express.static('public'))
    // app.use(express.static(root))
    // app.get('*', (req, res) => {
    //     res.sendFile('index.html', { root });
    // });
}

app.post('/api/contact',(req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        const go = Email({name, email, phone, message})
        if (!go){
            res.status(404).json({message: `Opps`})
        }   
        res.json(go)
    } catch (error) {
        res.json(error)
    } 
});

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
  
// app.get('/', (req, res) => {
// res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// app.get('/ping', (req, res) => {
//     res.json({message: `PONG`})
// })



app.listen(PORT, (err, connect ) => {
    if (err){
        console.log(err)
    } connect
    console.log(`App connected at http://localhost:${PORT} 🚀`)
})

// app.listen(PORT, () =>
//   console.log(`App listening at http://localhost:${PORT} 🚀`)
// );