function Weather(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this.__temperature = '';
}

Object.defineProperty(Weather.prototype, 'temperature', {
    get: function () {
        return this.__temperature;
    },
    set:function(value){
        this.__temperature = (value * 1.8 + 32).toFixed(2);
    }
});