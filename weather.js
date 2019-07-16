class Weather {
	constructor(city, countryCode) {
		this.apiKey = '1de1cdc243da11f9c4350e94e96cbf5e';
		this.city = city;
		this.countryCode = countryCode;
	}

	// Fetch weather from API
	async getWeather() {
		const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${this.apiKey}`);
		const responseData = await response.json();
		return responseData
	}

	// Change weather location
	changeLocation(city, countryCode) {
		this.city = city;
		this.countryCode = countryCode;
	}
}