import { instance, protectedInstance } from "./instance";

// define the user services
const userServices = {
    // register the user
    register: async(name, email, password)=>{
        // make a post request to the server
        return await instance.post('/users/register', {
            name, 
            email,
            password
        });
    },
    // login the user
    login: async(email, password)=>{

        // make a post request to the server
        return await instance.post('/users/login',{
            email,
            password,
        }, {
            withCredentials: true
        });
    }, 
    // get the user profile
    getUser: async () => {
        // make a get request to the server
        return await protectedInstance.get('/users/profile')
    },
    logout: async () => {
        // make a get request to the server for logout
        return await protectedInstance.get('/users/logout');
    },

}

export default userServices;