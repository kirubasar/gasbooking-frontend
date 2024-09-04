import userServices from "../services/userServices";

const userLoaders =  {
    getUser: async()=>{
        try{
            return await userServices.getUser();
        }catch(error){
            return null;
        }
    }
}

export default userLoaders;
