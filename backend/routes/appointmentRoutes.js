const express = require("express");
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
router.post('/',appointmentController.createAppointment);
router.get('/status',appointmentController.getAppointmentStatus)
router.get('/', appointmentController.getAllAppointments);
router.put('/:id/status', appointmentController.updateAppointmentStatus);
module.exports = router;