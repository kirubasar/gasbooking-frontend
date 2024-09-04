Gas-Booking Appication:

This is a simple gas-booking application that allows users to view products, booking gas, view booked gas list and also update the booking details, cancel the booking.

The application is built using the following technologies:

1. Frontend: React, React-Router-Dom, Bootstrap.

2. Tools: Vs code, Git, GitHub, Netlify, Vite.

Steps:

Frontend:

1. Create an react directory in command prompt
 
 ````
 npm create vite@latest
 ````
2. Open the directory in VS Code and basic react app setup 

3. Open the terminal and run the following command to create a package.json file:

 ````
 npm init
 ````

4. Install axios

 ````
 npm install axios
 ````

5. Create a instance.js file under the services folder and add the following code for connecting frontend to backend:
 
 ````
 import axios from "axios";

 const baseURL =  "backend url";
 const instance = axios.create({
    baseURL,
    timeout:5000,
    headers: {
        "Content-Type": "application/json",
    },
 });

 const protectedInstance = axios.create({
    baseURL,
    timeout:5000,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
 });

 export {instance, protectedInstance};
 ````

6. Install react router:

 ````
 npm install react-router-dom

 npm install react-dom
 ````

7. In App.jsx setup the router.

 ````
 import { createBrowserRouter, RouterProvider } from "react-router-dom";

 const router = createBrowserRouter([
   {
     path: "/",
     element: <h1>Hello, World!</h1>,
   }
 ])

 const App = () => {
   return (
     <div>App</div>
   )
   return <RouterProvider router={router} />;
 }

 export default App;
 ````

8. Create Home and Dashboard wrapper file under the wrappers folder.

9. In [HomeWrapper.jsx](HomeWrapper.jsx)  has home, register, login navbar codes.

10. In [Dashboard.jsx](Dashboard.jsx) has products, logout, bookedlist and search navbar codes.

11. Create Components based on the navbar under components folder:
  1. HomeWrapper child components
   - [Home.jsx](Home.jsx),
   - [Register.jsx](Register.jsx),
   - [Login.jsx](Login.jsx).

  2. DashboardWrapper child components
   - [Products.jsx](Products.jsx),
   - [Booking.jsx](Booking.jsx),
   - [BookedList.jsx](BookedList.jsx),
   - [EditBooking.jsx](EditBooking.jsx).

12. Set all child components to router under the HomeWrapper and DashboarWrapper in App.jsx

13. Install bootstrap for styling

 ````
 npm i bootstrap@5.3.3
 ````

14. using loaders to display our datas and services to get our endpoints.

a. Loaders:
  1. [userLoaders.js](userLoaders.js),
  2. [productLoaders.js](productLoaders.js),
  3. [bookingLoaders.js](bookingLoaders.js).

b. Services:
  1. [userServices.js](userServices.js),
  2. [productServices.js](productServices.js),
  3. [bookingServices.js](bookingServices.js).

15. All tasks complete next create git repository.

16. Initialize the git repository in the project directory:

 ````
 git init
 ````
 
17. Add the remote repository URL:

 ````
 git remote add origin <repository-url>
 ````

18. Rename the default branch from master to main:

 ````
 git branch -m main
 ````

19. Add the changes to the staging area:

 ````
 git add .
 ````

20. Commit the changes;

 ````
 git commit -m "frontend setup"
 ````

21. Push the changes to the remote repository:

 ````
 git push -u origin main
 ````

22. Last step Deploy our application to Netlify.







       




 


