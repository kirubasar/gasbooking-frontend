import React, { useState } from 'react';
import bookingServices from '../services/bookingServices';
import { useNavigate, useLocation } from 'react-router-dom';

const EditBooking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { booking } = location.state;

  if (!booking) {
    return <div>Error: Booking data is missing</div>;
  }

  const [formData, setFormData] = useState({
    slot: booking.slot,
    address: booking.address,
    deliveryDate: booking.deliveryDate
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    bookingServices.updateBooking(booking._id, formData)
      .then(response => {
        console.log(response.data);
        alert(response.data.message);

        // Update the booking object with the new data
        booking.slot = formData.slot;
        booking.address = formData.address;
        booking.deliveryDate = formData.deliveryDate;

        // Navigate back to the bookings list
        navigate('/dashboard/bookedList', { state: { updatedBooking: booking } });
      })
      .catch(error => {
        console.error('Error updating booking:', error);
        alert('Failed to update booking. Please try again.');
      });
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header">
                Edit Booking
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="deliveryDate" className="form-label">Delivery Date:</label>
                    <input type="date" className="form-control" id="deliveryDate" name="deliveryDate"
                      value={formData.deliveryDate} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address:</label>
                    <input type="text" className="form-control" id="address" name="address"
                      value={formData.address} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="slot" className="form-label">Slot:</label>
                    <input type="text" className="form-control" id="slot" name="slot"
                      value={formData.slot} onChange={handleChange} required />
                  </div>
                  <button type="submit" className="btn btn-primary">Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBooking;
