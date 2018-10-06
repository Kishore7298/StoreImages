import qs from "qs";

const ROOT_URL = "https://api.imgur.com";

export default {
    login(){
        const queryString = {
            client_id : "25f4184d54d6508",
            response_type : "token",
            
        }
       window.location= `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    }

}