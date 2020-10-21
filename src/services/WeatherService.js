const axios = require('axios');

module.exports = {
    async byCity(city) {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_MAP_KEY}&units=metric&lang=pt_br`);
            return response.data;

        } catch (error) {
            return false;
        }
    }
};
