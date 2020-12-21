var inpyts = document.getElementsByTagName("input");
var myMap = new Map();
export var myMap;
var changeBtns = document.getElementsByClassName("changeBtn");
var deleteBtns = document.getElementsByClassName("deleteBtn");

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
function filter() {
  let btnFiltrs = document.getElementsByClassName("btnFiltr");
  for (let btn of btnFiltrs) {
    btn.onclick = function () {
      filterIn(btn);
    };
  }
}
filter();
function inpytVal() {
  for (let inpyt of inpyts) {
    inpyt.addEventListener("change", function (event) {
      if (inpyt.validity.valid == false) {
        inpyt.value = "";
        alert("неверное значение");
      }
    });
  }
}
inpytVal();
export function deleteRace() {
  for (let deleteBtn of deleteBtns) {
    deleteBtn.addEventListener("click", function () {
      deleteRaceInp(deleteBtn.parentNode);
    });
  }
}
export function changeRace() {
  for (let changeBtn of changeBtns) {
    changeBtn.addEventListener("click", function () {
      changeRaceInp(changeBtn.parentNode);
    });
  }
}
export function checkType(span) {
  span.onclick = function () {
    checkTypeInp(span);
  };
}
