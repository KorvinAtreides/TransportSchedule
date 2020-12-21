import { myMap } from "../main.js";
export default function filterIn(btn) {
  let btnFiltrs = document.getElementsByClassName("btnFiltr");
  for (let btn2 of btnFiltrs) {
    btn2.style.backgroundColor = "white";
  }
  btn.style.backgroundColor = "rgb(89, 187, 187)";
  let lists = document.querySelectorAll("li");
  if (btn.id == "btnFiltr1") {
    for (let li of lists) {
      li.style.display = "block";
    }
  }
  if (btn.id == "btnFiltr2") {
    let today = new Date();
    for (let li of lists) {
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
        li.style.display = "none";
      } else {
        li.style.display = "block";
      }
    }
  }
  if (btn.id == "btnFiltr3") {
    let today = new Date();
    for (let li of lists) {
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
          ((hour - 3) * 60 + min) * 60 * 1000 <
        0
      ) {
        li.style.display = "none";
      } else {
        li.style.display = "block";
      }
    }
  }
  if (btn.id == "btnFiltr4") {
    for (let li of lists) {
      let el = li.lastChild;
      if (el.style.color == "grey") {
        li.style.display = "none";
      } else {
        li.style.display = "block";
      }
    }
  }
}
