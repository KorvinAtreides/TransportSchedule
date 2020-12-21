import { myMap } from "../../main.js";
import weatherBalloon from "../../fetch/weather.js";
export default function changeRaceInp(el) {
  let newRace = myMap.get(el.id);
  if (newRace != undefined) {
    select1.value = String(newRace.type);
    inStart.value = newRace.start;
    inEnd.value = newRace.end;
    weatherBalloon(inEnd.value);
    inTimeStart.value = newRace.timeStart;
    inTimeEnd.value = newRace.timeEnd;
    inPrice.value = newRace.price;
    el.parentNode.remove();
    myMap.delete(el.id);
    document.getElementById("maket").style.display = "block";
    buttons.style.display = "block";
    document.getElementById("select1").style.display = "block";
  }
}
