const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-datails');
const erro404 = document.querySelector('.not-found');
const cityhide = document.querySelector('.city-hide');


search.addEventListener('click', () => {

    const APIKey = `2f678ed236edc694ae393bd73a40a870`; 
    const city = document.querySelector(`.search-box input`).value;


    if(city == ``)
        return;
     
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {
      
        console.log(erro404);
        if(json.cod == '404'){
            cityhide.textContent = city;
            container.style.height = '400px';
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            erro404.classList.add('active');
            return;
        }


        clima = json.weather[0].main;
        const image = document.querySelector('.weather-box img');
        const description = document.querySelector('.weather-box .description');
        const temperatura = document.querySelector('.weather-box .temperatura');
        const humidity = document.querySelector('.weather-datails .humidity span');
        const wind = document.querySelector('.weather-datails .wind span');
   
        if(cityhide.textContent == city){
            return;
        }
        else{
            cityhide.textContent = city;

            container.style.height = '555px';
            container.classList.add('active');
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
            erro404.classList.remove('active');

            setTimeout(() => {
                container.classList.remove('active');
            }, 2500);

            switch (clima){
                case "Clear":
                    image.setAttribute("src",'/images/clear.png');
                    break;
    
                case "Rain":
                    image.setAttribute("src",'/images/rain.png');
                    break;
    
                case 'Snow':
                    image.setAttribute("src",'/images/snow.png');
                    break;
    
                case 'Clouds':
                    image.setAttribute("src",'/images/cloud.png');
                    break;
    
                case 'Mist':
                    image.setAttribute("src",'/images/mist.png');
                    break;
    
                case 'Haze':
                    image.setAttribute("src",'/images/nist.png');
                    break;
    
                default:
                    image.setAttribute("src",'/images/cloud.png');
            };
    
            temperatura.innerHTML = `${parseInt(json.main.temp)}<span>ºC</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;

            const infoWeather = document.querySelector('.info-weather');
            const infoHumidity = document.querySelector('.info-humidity');
            const infoWind = document.querySelector('.info-wind');

            const elCloneInfoWeather = infoWeather.cloneNode(true);
            const elCloneInfoHumidity = infoHumidity.cloneNode(true);
            const elCloneInfoWind = infoWind.cloneNode(true);

            elCloneInfoWeather.id = 'clone-info-weather';
            elCloneInfoWeather.classList.add('active-clone');

            elCloneInfoHumidity.id = 'clone-info-Humidity';
            elCloneInfoHumidity.classList.add('active-clone');

            elCloneInfoWind.id = 'clone-info-wind';
            elCloneInfoWind.classList.add('active-clone');

            /*setTimeout(() =>{
                infoWeather.insertAdjacentElement("afterend",elCloneInfoWeather);
                infoHumidity.insertAdjacentElement("afterend",elCloneInfoHumidity);
                infoWind.insertAdjacentElement("afterend",elCloneInfoWind);
            }, 2000);

            const cloneInfoWeather = document.querySelectorAll(".info-weather.active-clone");
            const totalCloneInfoWeather = cloneInfoWeather.length;
            const cloneInfoWeatherFirst = cloneInfoWeather[0];

            const cloneInfoHumidity = document.querySelectorAll(".info-humidity.active-clone");
            const cloneInfoHumidityFirst = cloneInfoHumidity[0];

            const cloneInfoWind = document.querySelectorAll(".info-wind.active-clone");
            const cloneInfoWindFirst = cloneInfoWind[0];

            if(totalCloneInfoWeather > 0){
                cloneInfoWeatherFirst.classList.remove('active.clone');
                cloneInfoHumidityFirst.classList.remove('active.clone');
                cloneInfoWindFirst.classList.remove('active.clone');

                setTimeout(() =>{
                    cloneInfoWeatherFirst.remove();
                    cloneInfoWeatherFirst.remove();
                    cloneInfoWeatherFirst.remove();
                }, 2200);
            }*/
        }    

    });
});
