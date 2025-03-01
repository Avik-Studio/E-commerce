import axios from "axios";

const Base_URL ="http://localhost:5000/api/";

//signup api

export const signup = async (payload) => {
    return axios.post(`${Base_URL}/signup` , payload);
}

//signin api 

