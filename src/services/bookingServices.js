import { protectedInstance } from "./instance"

const bookingServices = {
    createBooking: async(formData) =>{
        return await protectedInstance.post('/bookings', formData)
    },
    getAllBookings: async()=>{
        return await protectedInstance.get('/bookings')
    },
    updateBooking: async(bookingId, formData)=>{
        return await protectedInstance.put(`/bookings/${bookingId}`, formData)
    },
    deleteBooking: async(bookingId)=>{
        return await protectedInstance.delete(`/bookings/${bookingId}`)
    }
}

export default bookingServices;