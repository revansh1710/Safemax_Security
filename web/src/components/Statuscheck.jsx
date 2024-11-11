import { useState } from 'react';
import axios from 'axios';

const StatusCheck = () => {
  const [formData, setFormData] = useState({
    trackingId: '',
    email: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckStatus = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:2301/api/appointments/status`, {
        params: {
          trackingId: formData.trackingId,
          email: formData.email,
        },
      });
      setStatusMessage(`Status: ${response.data.status}`);
    } catch (error) {
      setStatusMessage('Invalid Tracking ID or Email');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Check Appointment Status</h2>
      <form onSubmit={handleCheckStatus} className="space-y-4">
        <input
          type="text"
          name="trackingId"
          placeholder="Tracking ID"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Check Status
        </button>
      </form>
      {statusMessage && (
        <p className={`text-center mt-4 font-medium ${statusMessage.includes('Invalid') ? 'text-red-600' : 'text-green-600'}`}>
          {statusMessage}
        </p>
      )}
    </div>
  );
};

export default StatusCheck;