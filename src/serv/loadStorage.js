import { myMap } from "../main.js";
export default function loadTodo() {
  if (localStorage.getItem("sheduleTable")) {
    let ul = document.querySelector("ul");
    ul.innerHTML = localStorage.getItem("sheduleTable");
    document.getElementById("select1").style.display = "block";
    buttons.style.display = "block";
    document.getElementById("maket").style.display = "block";
  }
  if (localStorage.getItem("Map")) {
    let myMap1 = new Map(JSON.parse(localStorage.getItem("Map")));
    for (let [key, value] of myMap1) {
      myMap.set(key, value);
    }
  }
}
