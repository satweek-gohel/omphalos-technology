const { GET_SERVICE } = require("./ApiRoutes");
const { nonAuthData } = require("./service");

export const service_get = async (id) =>{
    const response = await nonAuthData.get(`${GET_SERVICE}/${id}`, {
        cache: 'no-store'
      });
     
      return response;
      
}

