# WeatherTraversyMedia
This is an updated WeatherJS API project, from the Traversy Media Modern JavaScript From The Beginning course. It uses an alternate API, provided by openweathermap.org as the API used in the lectures has closed down.

Please do register for your own API key, don't just re-use mine, as there are only 60 API calls available per minute on a free subscription! Note that once you've requested an API key, it will take around an hour for it to be emailed to you. Your key should be inserted into line 3 of weather.js (this.apiKey = 'xxxxxxxx';)

As this is a different API to the original, some of the data provided is different. For example we now have country codes instead of state codes, and there are no icons available for us to download. I've set up a couple of functions to process data before displaying it, such as converting wind speed to miles per hour (from meters per second) and wind direction to a word such as 'Northerly' instead of 40 (Which would have been degree that the wind was blowing from).
