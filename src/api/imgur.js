import qs from "qs";
import axios from "axios";

const ROOT_URL = "https://api.imgur.com";
const CLIENT_ID = "25f4184d54d6508";

export default {
    login(){
        const queryString = {
            client_id : CLIENT_ID,
            response_type : "token",
            
        }
       window.location= `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    },
    fetchImages(token){
        return axios.get(`${ROOT_URL}/3/account/me/images`,{
            headers : {
                Authorization : `Bearer ${token}`
            }
        });

    }

}