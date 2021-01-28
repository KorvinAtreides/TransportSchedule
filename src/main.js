var myMap = new Map();
export var myMap;

import loadTodo from "./serv/loadStorage.js";
import saveStorage from "./serv/saveStorage.js";
import clearStorage from "./serv/clearStorage.js";
import changeSelect from "./event/changeSelect.js";
import weatherBalloon from "./fetch/weather.js";
import flickr from "./fetch/flickr.js";
import addNewRace from "./event/addNewRace.js";
import filterIn from "./event/filter.js";
import changeRaceInp from "./event/btnsInLi/changeRace.js";
import deleteRaceInp from "./event/btnsInLi/deleteRace.js";
import checkTypeInp from "./event/btnsInLi/checkType.js";

loadTodo();
saveStorageBtn.onclick = function () {
  saveStorage();
};
clearStorageBtn.onclick = function () {
  clearStorage();
};
btnCreate.onclick = function () {
  select1.style.display = "block";
};
select1.addEventListener("change", function () {
  changeSelect();
});
resetBtn.onclick = function () {
  info.innerHTML = "";
};
inEnd.addEventListener("change", function () {
  if (inEnd.validity.valid == true) {
    info.innerHTML = "<h2>Information about arrival station</h2>";
    weatherBalloon(inEnd.value);
    flickr(inEnd.value);
  }
});
btnAddNew.onclick = function () {
  addNewRace();
};

maket.addEventListener("input", function (event) {
  if (event.target.validity.valid == false) {
    event.target.value = "";
    alert("неверное значение");
  }
});

lis.addEventListener("click", function (event) {
  switch (event.target.classList.value) {
    case "btnFiltr":
      filterIn(event.target);
      break;
    case "changeBtn":
      changeRaceInp(event.target.parentNode);
      break;
    case "deleteBtn":
      deleteRaceInp(event.target.parentNode);
      break;
    case "svg-inline--fa fa-check-circle fa-w-16":
      checkTypeInp(event.target.parentNode);
      break;
    case "":
      if (
        event.target.parentNode.classList.value ==
        "svg-inline--fa fa-check-circle fa-w-16"
      ) {
        checkTypeInp(event.target.parentNode.parentNode);
      }
      break;
    default:
      break;
  }
});
