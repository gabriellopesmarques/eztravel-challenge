module.exports = {
    get(temperature, sunsetTime) {

        const now = new Date();

        if (temperature > 30 && now.getTime() < sunsetTime) {
            return "Don't forget the sun lotion";
        }

        if (temperature > 30 && now.getTime() > sunsetTime) {
            return "Cool down and relax";
        }

        if (temperature >= 20 && temperature <= 30) {
            return "Don't panic, you will be fine";
        }

        if (temperature >= 10 && temperature <= 19) {
            return "Take your coat with you";
        }

        if (temperature < 10 && now.getTime() < sunsetTime) {
            return "Just a coat will not be enough";
        }

        return undefined;
    }
};
