import { GET_MEMBERS_LIST, GET_PRODUCT_LIST, GET_SERVICES_LIST } from './ApiRoutes';
import { nonAuthData } from './service';


export const getProductsList = async () => {
    const response = await nonAuthData.get(GET_PRODUCT_LIST);
    return response;
};

export const getServiceList = async () => {
    const response = await nonAuthData.get(GET_SERVICES_LIST);
    return response;
};

export const getMembersList = async () => {
    const response = await nonAuthData.get(GET_MEMBERS_LIST);
    return response;
}

  