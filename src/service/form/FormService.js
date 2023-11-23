import axios from 'axios';
export const getListProvinces = async () => {
    const result = await axios.get('https://provinces.open-api.vn/api/?depth=2');
    return result.data;
}