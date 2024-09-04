import { protectedInstance } from "./instance"

const productServices = {
    // view all products
    viewProducts: async ()=>{
        return await protectedInstance.get('/products');

    },
    getProductByName: async(name) =>{
        return await protectedInstance.get('/products/search', {
            params: { name }
        });
    }


}

export default productServices;