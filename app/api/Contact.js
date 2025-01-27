import { INQUIRY } from "./ApiRoutes";
import { nonAuthData } from "./service";

export const send_mail = async (payload) =>{
    const response = await nonAuthData.post(INQUIRY, payload);  // Missing payload
    return response.data;
}