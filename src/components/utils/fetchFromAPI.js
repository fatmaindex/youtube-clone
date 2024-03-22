import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
        relatedToVideoId: '7ghhRHRP6t4',
        part: 'id,snippet',
        type: 'video',
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '1374da0139mshca2e0989ab030bbp166e2bjsn8b59245869bb',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
