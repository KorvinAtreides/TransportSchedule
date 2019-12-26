var inEnd = document.getElementById("inEnd");
let clearBtn = document.querySelector("#clear");
let saveBtn = document.querySelector("#save");
var inpyts = document.getElementsByTagName("input");
var myMap = new Map();
export var myMap;
var changeBtns = document.getElementsByClassName("changeBtn");
var deleteBtns = document.getElementsByClassName("deleteBtn");
var obj = {val:"undefined"}; 
export var obj;

import loadTodo from './serv/loadStorage.js';
import saveStorage from './serv/saveStorage.js';
import clearStorage from './serv/clearStorage.js';
import clickMainBtn from './event/mainBtn.js';
import changeSelect from './event/changeSelect.js';
import weatherBalloon from './fetch/weather.js';
import flickr from './fetch/flickr.js';
import addNewRace from './event/addNewRace.js';
import filterIn from './event/filter.js';
import changeRaceInp from './event/btnsInLi/changeRace.js';
import deleteRaceInp from './event/btnsInLi/deleteRace.js';
import checkTypeInp from './event/btnsInLi/checkType.js';

loadTodo();
saveBtn.addEventListener('click', function(){saveStorage()});
clearBtn.addEventListener('click', function(){clearStorage()});
document.getElementById("btn1").onclick = function(){
  clickMainBtn();
}
document.getElementById('select1').addEventListener('change', function() {
  changeSelect();
})
inEnd.addEventListener('change', function() {
  if (inEnd.validity.valid == true) {
  weatherBalloon(inEnd.value);
  flickr(inEnd.value);
  }  
});
document.getElementById("btnNew").addEventListener('click', function(){
  addNewRace()
});
function filter(){
  let btnFiltrs = document.getElementsByClassName("btnFiltr");
  for(let btn of btnFiltrs){
      btn.addEventListener ("click",function (){
      filterIn(btn);
      })
    }
};
filter();
function inpytVal(){
  for(let inpyt of inpyts){
      inpyt.addEventListener ("change", function (event) {
          if (inpyt.validity.valid == false) {
              inpyt.value = ""; 
              alert('неверное значение');
          }        
      });
  }
}
inpytVal(); 
export function deleteRace(){
  for(let deleteBtn of deleteBtns){
    deleteBtn.addEventListener ("click",function (){
      deleteRaceInp(deleteBtn.parentNode);
    })
  }
}
export function changeRace(){
  for(let changeBtn of changeBtns){
      changeBtn.addEventListener ("click",function (){
        changeRaceInp(changeBtn.parentNode);
      });
  }
}
export function checkType(){
  let spans =document.getElementsByTagName("span");
  for(let span of spans){
    span.addEventListener ("click",function (){
      checkTypeInp(span)})
  }
}