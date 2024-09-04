import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userServices from "../services/userServices";
import "./register.css";
const Register = () => {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
  
    const navigate = useNavigate();
  
    const handleRegister =(e)=>{
      e.preventDefault();
      
      // register the user
      userServices.register(name, email, password)
      .then(response=>{
        //console.log(response.data)
        alert(response.data.message);
  
        // clear the form
        setName('');
        setEmail('');
        setPassword('');
  
        // redirect to login page
        navigate('/login');
      })
      .catch(error=>{
        alert(error.response.data.message);
      })
    }
    return (
      <div>
          <div className="container mt-5">
          <div className="row">
          <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        Register
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                              <input type="name" className="form-control" id="name" name="name"
                              onChange={(e)=>setName(e.target.value)} value={name}
                              />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                              <input type="email" className="form-control" id="email" name="email"
                              onChange={(e)=>setEmail(e.target.value)} value={email}/> 
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                              <input type="password" className="form-control" id="password" name="password"
                              onChange={(e)=>setPassword(e.target.value)} value={password}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                    </div>
              </div>
      </div>
  </div>
  </div>
  </div>
    )
  }
  
  export default Register;