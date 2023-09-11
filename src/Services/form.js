import axios from "../axios";
import { catchAxiosError,catchAxiosSuccess }  from "./Response"
// import axios from 'axios';

export const submitWaitlist = async (payload) => {

    try {
        let res = await axios.post(`waitlists?skipFileExceptions=false`,payload,{ 
        })
        catchAxiosSuccess(res)   
        return res.data;

    } catch (error) {
        catchAxiosError(error)   
        throw error;
    }

}
