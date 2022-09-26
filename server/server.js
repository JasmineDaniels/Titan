import express from 'express'
import dotenv from "dotenv"
import Email from "./Email.js"
//import bodyParser from 'body-parser'
import cors from 'cors'
dotenv.config()

const PORT = process.env.PORT || 3001
const app = express();

app.use(express.urlencoded({ extended: false }));
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../portfolio-2022/build')));
// }
  
// app.get('/', (req, res) => {
// res.sendFile(path.join(__dirname, '../portfolio-2022/build/index.html'));
// });

app.get('/ping', (req, res) => {
    res.json({message: `PONG`})
})

app.get('/', (req, res) => {
    res.download('./2022_Resume.png')
})

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

app.listen(PORT, (err, connect ) => {
    if (err){
        console.log(err)
    } connect
    console.log(`connected`)
})