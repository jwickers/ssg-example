if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
        var crd = pos.coords;
        const url = `/.netlify/functions/weatherapi?lat=${crd.latitude}&lon=${crd.longitude}`;
        console.log(`Geolocation: lat ${crd.latitude} long ${crd.longitude} accuracy ${crd.accuracy}`);
        fetch(url).then(response => {
            return response.json()
        })
        .then(data => {
            console.log('Weather is: ', data);
            document.querySelector('#city').textContent = data.name;
            document.querySelector('#temp').textContent = `It's ${data.main.temp}°C, feels like ${data.main.feels_like}°C`;
            document.querySelector('#main').textContent = data.weather[0].main;
            document.querySelector('#desc').textContent = data.weather[0].description;
            document.querySelector('#weather').classList.remove('hidden');
        });
    }, err => {
        console.warn(`Geolocation error ${err.code}: ${err.message}`)
    });
}