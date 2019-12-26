export default function weatherBalloon( cityName ) {
    let key = "216c1d87926e47812ec289b5d90f16e7";
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+ '&appid=' + key+'&lang=ru')  
    .then(function(resp){    return resp.json()}  )
    .then(function(data) {
      console.log(data);
      let info = document.getElementById("info");
      info.innerHTML ="";
      if (data.message != undefined){
        alert(String(data.message))
        inEnd.value ="";
      } else{
      info.innerHTML +=`
      <ul id="forecast">
      <h2>Прогноз погоды:</h2>
      <li>Город: ${data.name}</li>
      <li>Температура: ${Math.round((data.main.temp-275.15)*100)/100} \uFE7EC</li>
      <li>Давление: ${data.main.pressure} Па</li>
      <li>Влажность: ${data.main.humidity} %</li>
      <li>Облачность: ${data.clouds.all} %</li>
      <li>Скорость ветра: ${data.wind.speed} м/с</li>
      </ul>`}
    });
}
  // .catch(function(resp) {
  //   info.innerHTML ="";
  //   inEnd.value = "";
  //   alert(String(data.message));
  // })