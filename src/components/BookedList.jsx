import { useLoaderData, useNavigate, useLocation } from "react-router-dom";
import "./bookedList.css";
import bookingServices from "../services/bookingServices";
import { useState, useEffect } from "react";

const BookedList = () => {
  const initialBookings = useLoaderData();
  const [bookings, setBookings] = useState(initialBookings.data.bookings);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.updatedBooking) {
      const updatedBooking = location.state.updatedBooking;
      const updatedBookings = bookings.map(booking =>
        booking._id === updatedBooking._id ? updatedBooking : booking
      );
      setBookings(updatedBookings);
      //console.log('Updated Bookings:', updatedBookings);
    }
  }, [location.state]); // Only run when location.state changes

  // Delete booked gas
  const handleDelete = (bookingId) => {
    bookingServices.deleteBooking(bookingId)
      .then(response => {
        console.log(response.data);
        alert(response.data.message);
        const deletedBookings = bookings.filter(booking => booking._id !== bookingId);
        setBookings(deletedBookings);

        navigate('/dashboard/products');
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  };

  const handleEdit = (booking) => {
    //console.log("Booking:", booking);
    navigate('/dashboard/editBooking', { state: { booking } });
  };

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Product</th>
            <th>Delivery Date</th>
            <th>Slot</th>
            <th>Address</th>
            <th>Payment Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.user.name}</td>
              <td>{booking.products.name}</td>
              <td>{booking.deliveryDate}</td>
              <td>{booking.slot}</td>
              <td>{booking.address}</td>
              <td>{booking.paymentStatus}</td>
              <td>
                <button type='button' className='btn btn-primary' onClick={() => handleEdit(booking)}>Update</button>
                <button type='button' className='btn btn-danger' onClick={() => handleDelete(booking._id)}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookedList;
