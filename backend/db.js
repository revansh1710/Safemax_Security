const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const databasePort = process.env.DATABASE_PORT;
async function dbconnection() {
    try {
        await mongoose.connect(databasePort);
        console.log('DB Connected Successfully');
    } catch (err) {
        console.log('Connection Failed', err);
    }
}
module.exports = { dbconnection };
