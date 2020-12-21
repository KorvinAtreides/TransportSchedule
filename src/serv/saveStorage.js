import { myMap } from "../main.js";
export default function saveStorage() {
  let ul = document.querySelector("ul");
  localStorage.setItem("sheduleTable", ul.innerHTML);
  localStorage.setItem("Map", JSON.stringify([...myMap]));
}
