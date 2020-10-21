const WeatherService = require("../services/WeatherService");
const IPGeolocationService = require("../services/IPGeolocationService");
const SuggestionService = require("../services/SuggestionService");
const { format } = require("date-fns");

module.exports = {
    async index(req, res) {
        const { city } = req.query;
        const weather = await WeatherService.byCity(city);

        if (!weather) {
            return res.status(404).json({
                "error": "404",
                "message": "city not found"
            });
        }

        const ipgeolocation = await IPGeolocationService.LatLon(weather.coord.lat, weather.coord.lon);
        const sunsetTime = weather.sys.sunset * 1000;
        const suggestion = SuggestionService.get(weather.main.temp, sunsetTime);
        const now = new Date();
        const date = format(now, 'dd/MM/yyyy');
        const time = format(now, 'H:mm:ss');

        return res.json({
            "location": city,
            "date": date,
            "current_time": time,
            "temp": weather.main.temp,
            "temp_min": weather.main.temp_min,
            "temp_max": weather.main.temp_max,
            "sunrise": ipgeolocation.sunrise,
            "sunset": ipgeolocation.sunset,
            "suggestion": suggestion
        });

    }
};
