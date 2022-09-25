import express from 'express'
import dotenv from "dotenv"
import Email from "./Email.js"
import bodyParser from 'body-parser'
import cors from 'cors'
dotenv.config()

const PORT = process.env.PORT || 3001
const app = express();

//app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../portfolio-2022/build')));
// }
  
// app.get('/', (req, res) => {
// res.sendFile(path.join(__dirname, '../portfolio-2022/build/index.html'));
// });

app.post('/api/contact', (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        const go = Email({name, email, phone, message})
        if (!go){
            res.status(404).json({message: `Opps`})
        }   
        res.json(go)
    } catch (error) {
        res.status(500).json(error)
    }
    
});

app.listen((PORT, () => console.log(`Portfolio is listening on port ${PORT}`)));