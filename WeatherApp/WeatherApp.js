
async function getVreme(){
    let oras = document.querySelector("#oras").value;
    let url = "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

    
    let response = await fetch(url + oras );
    let weatherNow = await response.json();
    if(weatherNow === null) weatherNow= "";
    let str = "";
        str += `<div class="curWeather">
        <img src="http://openweathermap.org/img/w/${weatherNow.weather[0].icon}.png" id="currentWeatherIcon" >
        
        <ul>
            <li>Descriere: ${weatherNow.weather[0].description}</li>
            <li>Umiditate: ${weatherNow.main.humidity} %</li>
            <li>Presiune: ${weatherNow.main.pressure} mmHg</li>
            <li>Temperatura curenta: ${weatherNow.main.temp} °C</li>
            <li>Minima zilei: ${weatherNow.main.temp_min} °C</li>
            <li>Maxima zilei: ${weatherNow.main.temp_max} °C</li>
        </ul>
        </div>
        <span class="cityMap">
          <iframe  id="gmap" src="https://maps.google.com/maps?q=${oras}&t=&z=11&ie=UTF8&iwloc=&output=embed"></iframe>
        </span>
          `
    
    document.querySelector('#vreme').innerHTML = str;
    
}
async function getPrognoza(){
    let oras = document.querySelector("#oras").value;
    let url = "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

    let response = await fetch(url + oras);
    let forecastNow = await response.json();
    if (forecastNow === null) forecastNow={};
    

  let sirZile = document.querySelectorAll(".Days");

  let indexZi = 0;
  let zi = forecastNow.list[0].dt_txt.substr(0, 10);
  sirZile[indexZi].innerHTML = `<p class="ziua">Ziua:<span class="bold">${zi}</span></p>`;

  for (let i = 0; i < forecastNow.list.length; i++) {
    let data = forecastNow.list[i].dt_txt.substr(0, 10);
    let ora = forecastNow.list[i].dt_txt.substr(11, 5);
    if (zi !== data) {
      indexZi++;
      zi = data;
      sirZile[
        indexZi
      ].innerHTML += `<p class="ziua">Ziua:<span class="bold">${zi}</span></p>`;
    }
    sirZile[indexZi].innerHTML += `
      <div class="prognoza">
        <img src="http://openweathermap.org/img/w/${
          forecastNow.list[i].weather[0].icon
        }.png" alt="weatherImg" class="imgPrognoza">
        <p>Ora:<span class="bold"> ${forecastNow.list[i].dt_txt.substr(
          11,
          5
        )}</span></p>
        <p>Temperatura:<span class="bold"> ${
          forecastNow.list[i].main.temp
        }°C</span></p>
        <p>Descriere:<span class="bold"> ${
          forecastNow.list[i].weather[0].description
        }</span></p>
       </div> 
    `;
  }
}
function searchKeyPress(e)
{
    if (e.keyCode == 13)
    {
        document.querySelector('.myBtns').click();
        return false;
    }
    return true;
}