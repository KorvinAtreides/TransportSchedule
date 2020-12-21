import { checkType, deleteRace, changeRace, myMap } from "../main.js";
import Race from "../constructor/Race.js";

function dividedDate(str) {
  let slicedStr =
    str.slice(0, str.indexOf("T")) +
    " " +
    str.substring(str.indexOf("T") + 1, str.length);
  return slicedStr;
}

export default function addNewRace() {
  if (
    select1.value == "" ||
    inStart.value == "" ||
    inEnd.value == "" ||
    inTimeStart.value == "" ||
    inTimeEnd.value == "" ||
    inPrice.value == ""
  ) {
    alert("не все поля заполнены");
  } else if (inTimeStart.value >= inTimeEnd.value) {
    alert("укажите верное время");
  } else {
    let li = document.createElement("li");
    let today = new Date();
    let ul = document.querySelector("ul");
    ul.appendChild(li).append(
      select1.value,
      " ",
      inStart.value,
      "-",
      inEnd.value,
      " ",
      dividedDate(inTimeStart.value),
      " - ",
      dividedDate(inTimeEnd.value),
      " ",
      inPrice.value,
      "$"
    );
    let newRace = new Race(
      select1.value,
      inStart.value,
      inEnd.value,
      inTimeStart.value,
      inTimeEnd.value,
      inPrice.value
    );

    li.innerHTML +=
      '<div class="dispInl" id="change' +
      today.getHours() +
      today.getMinutes() +
      today.getSeconds() +
      '"><button type="button" class="changeBtn">change</button><button type="button" class="deleteBtn">delete</button></div>';
    li.innerHTML += '<span><i class="fas fa-check-circle"></i></span>';
    li.lastChild.style.color = "grey";
    myMap.set(
      "change" +
        today.getHours() +
        today.getMinutes() +
        today.getSeconds() +
        "",
      newRace
    );
    let inpyts = document.getElementsByTagName("input");
    for (let inpyt of inpyts) {
      inpyt.value = "";
    }
    select1.options[0].selected = true;
    info.innerHTML = "";
    changeRace();
    deleteRace();
    checkType(li.lastChild);
  }
}
