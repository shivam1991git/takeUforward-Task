import axios from 'axios';

const API_URL = 'http://localhost:3000/api/banner';

export const getBanner = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching banner:', error);
        throw error;
    }
};

export const updateBanner = async (bannerData) => {
    try {
        const response = await axios.put(API_URL, bannerData);
        return response.data;
    } catch (error) {
        console.error('Error updating banner:', error);
        throw error;
    }
};
