export default function weatherBalloon( cityName ) {
    let key = "216c1d87926e47812ec289b5d90f16e7";
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+ '&appid=' + key+'&lang=ru')  
    .then(function(resp){    return resp.json()}  )
    .then(function(data) {
      console.log(data);
      let info = document.getElementById("info");
      if (data.message != undefined){
        alert(String(data.message))
        inEnd.value ="";
      } else{
      info.innerHTML +=`
      <ul id="forecast">
      <h2>Прогноз погоды:</h2>
      <li>Город: ${data.name}</li>
      <li>Температура: ${Math.round((data.main.temp-275.15)*100)/100} \uFE7EC</li>
      <li>Давление: ${data.main.pressure/10} кПа</li>
      <li>Влажность: ${data.main.humidity} %</li>
      <li>Облачность: ${data.clouds.all} %</li>
      <li>Скорость ветра: ${data.wind.speed} м/с</li>
      </ul>`;
      let div = document.createElement("div");
      info.appendChild(div);
      div.innerHTML+=`Сейчас в городе ${cityName} ${data.weather[0].description}. `
      div.innerHTML+=`Температура окружающей среды составляет ${Math.round((data.main.temp-275.15)*100)/100} \uFE7EC. `;
      let humidity= "";
      if (data.main.humidity<50){humidity="Пониженная"}
      else if (data.main.humidity>70){humidity="Повышенная"}
      else {humidity="Нормальная"}
      let pressure= "";
      if (data.main.pressure<995){pressure="пониженное"}
      else if (data.main.pressure>1015){pressure="повышенное"}
      else {pressure="нормальное"}
      div.innerHTML+=`${humidity} влажность и ${pressure} атмосферное давление. `;
      if (data.wind.speed<=1){div.innerHTML+=`Безветренно. `}
      else if (data.wind.speed>1 && data.wind.speed<=3){div.innerHTML+=`Лёгкий ветер. `}
      else if (data.wind.speed>3 && data.wind.speed<=5){div.innerHTML+=`Слабый ветер. `}
      else if (data.wind.speed>5 && data.wind.speed<=7){div.innerHTML+=`Умеренный ветер. `}
      else if (data.wind.speed>7 && data.wind.speed<=15){div.innerHTML+=`Сильный ветер. `}
      else if (data.wind.speed>15 && data.wind.speed<=29){div.innerHTML+=`Шторм. `}
      else{`Ураган. `}
      let tempFeel = Math.round((data.main.feels_like-275.15)*100)/100;
      div.innerHTML+=`На улице `;
      if (tempFeel<=-24){div.innerHTML+=`крайне холодно. `}
      else if (tempFeel>-24 && tempFeel<=-12){div.innerHTML+=`очень холодно. `}
      else if (tempFeel>-12 && tempFeel<=0){div.innerHTML+=`холодно. `}
      else if (tempFeel>0 && tempFeel<=6){div.innerHTML+=`умеренно прохладно. `}
      else if (tempFeel>6 && tempFeel<=12){div.innerHTML+=`похладно. `}
      else if (tempFeel>12 && tempFeel<=18){div.innerHTML+=`умеренно тепло. `}
      else if (tempFeel>18 && tempFeel<=24){div.innerHTML+=`тепло. `}
      else if (tempFeel>24 && tempFeel<=30){div.innerHTML+=`жарко. `}
      else {div.innerHTML+=`очень жарко. `}
      div.innerHTML+=`Не забудьте взять в дорогу вещи по погоде =)`;
    }
    });
}
  // .catch(function(resp) {
  //   info.innerHTML ="";
  //   inEnd.value = "";
  //   alert(String(data.message));
  // })