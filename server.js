const express = require('express');
const mongoose = require('mongoose');
const CORS = require('cors')
const app = express();
app.use(express.json())
app.use(CORS())
const 