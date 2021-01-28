import { myMap } from "../main.js";
export default function timer(li) {
  let today = new Date();
  let el = li.firstChild.nextSibling;
  let newRace = myMap.get(el.id);
  let dateGo = String(newRace.timeStart).slice(
    0,
    String(newRace.timeStart).indexOf("T")
  );
  let timeGo = String(newRace.timeStart).substring(
    String(newRace.timeStart).indexOf("T") + 1,
    String(newRace.timeStart).length
  );
  let hour = Number(timeGo[0] + timeGo[1]);
  let min = Number(timeGo[3] + timeGo[4]);
  if (
    Date.parse(today) -
      Date.parse(dateGo) -
      ((hour - 3) * 60 + min) * 60 * 1000 >
    0
  ) {
    return true;
  } else {
    return false;
  }
}
