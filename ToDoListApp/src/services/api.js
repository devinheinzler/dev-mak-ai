import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your backend URL if running on a different host

const api = axios.create({
    baseURL: API_URL,
});

// Function to fetch data from the backend
export const fetchData = async () => {
    try {
        const response = await api.get('/data');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
