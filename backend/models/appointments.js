// models/Appointment.js
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    trackingId:{
        type:String,
        unique: true, 
        required: true 
    },
    name: {
        type: String,
        required: [true, 'Name is required.'],
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
    },
    date: {
        type: Date, // Or `Date` if you want it as a date object
        required: [true, 'Date is required.'],
    },
    time: {
        type: String, // Or a specific format depending on your needs
        required: [true, 'Time is required.'],
    },
    comments: {
        type: String,
        default: '',
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'canceled'],
        default: 'pending',
    },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
