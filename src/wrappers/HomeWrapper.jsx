import { Link, Outlet } from "react-router-dom/dist"


const HomeWrapper = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Gas Booking</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                 <ul className="navbar-nav" id="navList">
                    <li className="nav-item" >
                    <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                    </li>
                 </ul>
                </div>
            </div>
        </nav>
        <Outlet />
    </div>
  )
}

export default HomeWrapper;