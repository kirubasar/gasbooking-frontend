import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import userServices from "../services/userServices";
import productServices from "../services/productServices";
import { useState } from "react";


const DashboardWrapper = () => {
    
    const navigate = useNavigate();
    const user = useLoaderData(); 
    
    const[searchsQuery, setSearchsQuery] = useState('')

    const handleSearch =(e)=>{
        e.preventDefault();
        //console.log(searchsQuery);
        productServices.getProductByName(searchsQuery).
        then (response => {
          navigate('/dashboard/products', { state: { searchResults: response.data.product } });
          //console.log(response.data);
        }).catch(error => {
          alert(error.response?.data?.message || 'An error occurred during search');
        })
        setSearchsQuery('');
    }
  
    //console.log(user.data.user)
  
    
    const handleLogout = ()=> {
      userServices.logout()
        .then (response => {
          alert('logout successful');
           
          //redirect to login page
          navigate('/login');
          
        })
        .catch(error => {
          alert(error.response.data.message);
        })
    }
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
          <Link className="navbar-brand" to="/dashboard">Dashboard</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
           </button>
              <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav" >
                  <li className="nav-item">
                  <Link className="nav-link disabled" aria-disabled="true" to="/dashboard">Welcome {  user.data.user.name }</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link active"  to="/dashboard/products">Products</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" onClick={handleLogout}>Logout</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to="/dashboard/bookedList">Booked List</Link>
                  </li>
               </ul>
               <form className="d-flex" role="search" onSubmit={handleSearch}>
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                  value={searchsQuery} onChange={(e)=>setSearchsQuery(e.target.value)}
                  />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                
               </div>
          </div>
      </nav>
      
      <Outlet/>
  </div>
    )
}

export default DashboardWrapper;