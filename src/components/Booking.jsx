import React, { useEffect, useState } from 'react'
import bookingServices from '../services/bookingServices';
import { useNavigate } from 'react-router-dom';
import productServices from '../services/productServices';

const Booking = () => {
  const [formData, setFormData] = useState({
    products: '',
    bookingDate:new Date().toISOString().slice(0, 10),
    deliveryDate: new Date().toISOString().slice(0, 10),
    address: '',
    slot: '',
    paymentMethod: 'RazorPay',
    paymentStatus: 'Pending'
  });
  const navigate = useNavigate()

  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    // Fetch products to populate the dropdown
    productServices.viewProducts().then(response => {
      setProducts(response.data.products);
    }).catch(error => {
      console.error('Error fetching products:', error);
    });
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit =(e)=>{
    e.preventDefault();

    // booking the gas
    bookingServices.createBooking(formData)
    .then(response=>{
      //console.log(response.data);
        alert(response.data.message);
        setFormData({
          products: '',
          bookingDate: new Date().toISOString().slice(0, 10),
          deliveryDate: new Date().toISOString().slice(0, 10),
          address: '',
          slot: '',
          paymentMethod: 'RazorPay',
          paymentStatus: 'Pending'
        });
        navigate('/dashboard/products'); // Redirect to products page
      })
      .catch(error => {
        console.error('Error creating booking:', error);
        alert('Failed to create booking. Please try again.');
      });
  }
    return (
    <div>
     <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              Booking Gas
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="products" className="form-label">Products:</label>
                  <select className="form-control" id="products" name="products"
                    value={formData.products} onChange={handleChange}>
                    <option value="">Select a product</option>
                    {products.map(product => (
                      <option key={product._id} value={product._id}>{product.name}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="bookingDate" className="form-label">Booking Date:</label>
                  <input type="date" className="form-control" id="bookingDate" name="bookingDate"
                    value={formData.bookingDate} onChange={handleDateChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="deliveryDate" className="form-label">Delivery Date:</label>
                  <input type="date" className="form-control" id="deliveryDate" name="deliveryDate"
                    value={formData.deliveryDate} onChange={handleDateChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address:</label>
                  <input type="text" className="form-control" id="address" name="address"
                    value={formData.address} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="slot" className="form-label">Slot:</label>
                  <input type="text" className="form-control" id="slot" name="slot"
                    value={formData.slot} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="paymentStatus" className="form-label">Payment Status:</label>
                  <select name="paymentStatus" value={formData.paymentStatus} onChange={handleChange} required>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="Failed">Failed</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">Apply</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
    )
}

export default Booking;