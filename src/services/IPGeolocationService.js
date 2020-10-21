const axios = require('axios');

module.exports = {
    async LatLon(lat, lon) {

        try {
            const response = await axios.get(`https://api.ipgeolocation.io/astronomy?apiKey=${process.env.IP_GEOLOCATION_KEY}&lat=${lat}8&long=${lon}`);
            return response.data;

        } catch (error) {
            return false;
        }
    }
};
