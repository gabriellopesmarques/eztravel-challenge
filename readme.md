# EZ Travel Challenge

```http
GET /?city=fortaleza
```

## How to use
### Install dependencies
```
npm install
```

### Set environments variables
Copy ```.env.example``` as ```.env```, set your api keys and server port


## API doc
### Request (Query string)

#### city
Get infos about the city   


### Return
```
{
  "location": "fortaleza",
  "date": "16/10/2020",
  "current_time": "19:17:49",
  "temp": 26.86,
  "temp_min": 26.67,
  "temp_max": 27,
  "sunrise": "05:13",
  "sunset": "17:25",
  "suggestion": "Don't panic, you will be fine"
}
```

location: Location informed (string)   
date: Date (request date in format dd/mm/yyyy)   
current_time: Current time (request time hh:mm:ss)   
temp: Temperature (celsius)   
temp_min: Max temperature (celsius)   
temp_max: Min temperature (celsius)   
sunrise: Sunrise time (hh:mm)   
sunset: Sunset time (hh:mm)   
suggestion: Suggestion (string)
