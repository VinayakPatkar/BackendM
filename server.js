const express = require('express');
const mongoose = require('mongoose');
const CORS = require('cors')
const app = express();
app.use(express.json())
app.use(CORS())
const URI = 'mongodb://localhost:27017/';
mongoose.connect(URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
app.use('/api', require('./Routes/AuthRouter.js'))
const PORT = 5000;
app.listen(PORT,() => {
    console.log('Listening on port :',PORT)
})