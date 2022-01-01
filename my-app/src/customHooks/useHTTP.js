import { useState } from 'react';
import axios from 'axios';
const BASE_URL = "http:localhost:8000"
//envia post a la api
export const usePost = () => {
    const [response, setResponse] = useState(null);
    const [fetching, setFetching] = useState(false);

    const postData = async (endpoint, object) => {
        try {
            setFetching(true);
            const responseData = await axios.post(`${BASE_URL}/${endpoint}`, object);
            setResponse(responseData);
            setFetching(false);
        } catch (e) {
            console.error(e);
        }
    }
    return [postData, response, fetching];


}

export const useGet = () => {
    const [response, setResponse] = useState(null);
    const [fetching, setFetching] = useState(false);
    const getData = async (endpoint) => {
        const responseData = await axios.get(`${BASE_URL}/${endpoint}`);
        setResponse(getData);
        setFetching(false);
    }
    return [getData, response, fetching];
}