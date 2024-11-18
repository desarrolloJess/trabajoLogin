import axios from 'axios';

const endPoint = import.meta.env.VITE_REACT_API_URL;

const login = async (user) => {
    try {
        const response = await axios.post(`${endPoint}CRMWeb/Login`, user);
        return response.data;
    } catch (error) {
        throw error.response ? error.response : new Error('Error de red');
    }
};


export default {
    login,
};
