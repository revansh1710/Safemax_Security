const Appointment = require('../models/appointments.js');
const { v4: uuidv4 } = require("uuid");
const createAppointment = async (req, res) => {
  try {
    const trackingId = uuidv4();
    const appointment = new Appointment({
      ...req.body,
      trackingId,
    });
    await appointment.save();
    res.status(201).json({ appointment, trackingId }); 
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getAppointmentStatus = async (req, res) => {
  const { email, trackingId } = req.query;
  try {
    const appointment = await Appointment.findOne({ email, trackingId });
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found or invalid credentials' });
    }
    res.json({ status: appointment.status });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAppointmentStatus = async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true, runValidators: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    res.json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createAppointment,
  getAllAppointments,
  updateAppointmentStatus,
  getAppointmentStatus  
};
