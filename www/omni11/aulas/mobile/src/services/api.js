import axios from 'axios';

const api = axios.create({
    // Defina EXPO_PUBLIC_API_URL no .env (ex.: http://192.168.0.143:3333)
    baseURL: process.env.EXPO_PUBLIC_API_URL ?? 'http://192.168.0.143:3333',
});

export default api;
