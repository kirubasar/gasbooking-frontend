import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeWrapper from "./wrappers/HomeWrapper";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import userLoaders from "./loaders/userLoaders";
import DashboardWrapper from "./wrappers/DashboardWrapper";
import Products from "./components/Products";
import productLoaders from "./loaders/productLoaders";
import Booking from "./components/Booking";
import BookedList from "./components/BookedList";
import bookingLoaders from "./loaders/bookingLoaders";
import EditBooking from "./components/EditBooking";
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeWrapper />,
      children: [
        {
          path:"/",
          element: <Home />
        },
        {
          path:"register",
          element: <Register />
        },
        {
          path:"login",
          element: <Login />
        }
      ] 
  },
  {
    path: "dashboard",
    element: <DashboardWrapper />,
    loader: userLoaders.getUser,
    children: [
      
      {
        path: "products",
        element: <Products/>,
        loader: productLoaders.viewProducts,
      },
      {
        path: "booking",
        element: <Booking />
      },
      {
        path: "bookedList",
        element: <BookedList />,
        loader: bookingLoaders.getAllBookings
      },
      {
        path:"editBooking",
        element:<EditBooking/>
      }
    ]
  }

])

const App = () => {
  return (
  <RouterProvider router = {router} />
  )
}

export default App;