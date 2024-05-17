require('dotenv').config();
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const emailController = require('./controllers/email-controller.cjs');
const PORT = process.env.PORT || 3000;
const multer = require('multer');
const upload = multer();

const app = express()
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
    optionSuccessStatus:200
}));

app.post('/participate', upload.fields([]), emailController.EmailSend)

  const start = async () => {
    try {
      app.listen(PORT, () => console.log(`Server \n Port: ${PORT} \n Link: ${process.env.API_URL}`))
    } catch (e) {
      console.log(e)
    }
  }
  
  start()