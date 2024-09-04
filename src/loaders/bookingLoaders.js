import bookingServices from "../services/bookingServices"

const bookingLoaders ={
    createBooking: async () =>{
        try{
            return await bookingServices.createBooking()
        }catch(error){
            return null;
        }
    },
    getAllBookings: async()=>{
        try{
            return await bookingServices.getAllBookings()
        } catch(error){
            return null;
        }
    },
    updateBooking: async()=>{
        try{
            return await bookingServices.updateBooking()
        } catch(error){
            return null;
        }
    },
    deleteBooking: async() => {
        try{
            return await bookingServices.deleteBooking()
        } catch(error){
            return null;
        }
    }
}

export default bookingLoaders;