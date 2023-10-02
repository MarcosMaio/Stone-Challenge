import axios from 'axios';

const fetchDollarCotation = async () => {
    try {
        const response = await axios.get('https://economia.awesomeapi.com.br/json/all/USD-BRL');
        return response.data.USD.bid;
    } catch (error) {
        throw error;
    }
};

export default fetchDollarCotation;