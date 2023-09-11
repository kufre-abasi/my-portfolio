// import axios from "../axios";
import { catchAxiosError,catchAxiosSuccess }  from "./Response"
import axios from 'axios';

const BASE_URL = 'https://countriesnow.space/api/v0.1/countries';

export const getAllCountries = async () => {

    try {
        let res = await axios.get(`${BASE_URL}`,{ 
        })
        catchAxiosSuccess(res)   
        return res.data.data;

    } catch (error) {
        catchAxiosError(error)   
        throw error;
    }

}
