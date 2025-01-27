const { GET_PRODUCT } = require("./ApiRoutes");
const { nonAuthData } = require("./service");

export const product_get = async (id) =>{
    const response = await nonAuthData.get(`${GET_PRODUCT}/${id}`, {
        cache: 'no-store'
      });
     
      return response;
      
}