const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
var bodyParser = require('body-parser')

const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB({ alter: true });


const app = express();
app.use(cors());
app.use(express.json());

// app.use('/public', express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// App sample route

app.get('/', (req, res) => {
    res.send('Hello Coders!');
});


// ----------------------------Routes------------------------------------
const routes = require('./src/routes/esroutes');
app.use('/api', routes)




const PORT = process.env.PORT || 5050;

app.listen(PORT, () =>
    console.log(
        `Server is running at ${PORT} in ${process.env.NODE_ENV} environment`
    )
);