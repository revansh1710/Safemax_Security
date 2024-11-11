const express = require('express');
const bodyParser = require('body-parser'); 
const dotenv = require('dotenv');
const cors=require('cors');
const app = express();
const appointmentRoutes=require('./routes/appointmentRoutes.js')
const db = require('./db.js');
app.use(cors());
app.use(bodyParser.json());
dotenv.config();
db.dbconnection();
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/appointments',appointmentRoutes);
const PORT = process.env.PORT || 1710;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));