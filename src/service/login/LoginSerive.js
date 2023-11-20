import axios from 'axios';
export const handleLogin = async (body) => {
    const user = await axios.post('https://dummyjson.com/auth/login', body);
    return user;
}