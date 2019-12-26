import {checkType,deleteRace,changeRace, myMap, obj} from '../main.js';
import Race from '../class/Race.js';
export default function addNewRace(){
    let select1 = document.getElementById('select1')
    let inDate = document.getElementById("inDate");
    let inStart = document.getElementById("inStart");
    let inTimeStart = document.getElementById("inTimeStart");
    let inTimeEnd = document.getElementById("inTimeEnd");
    let inPrice = document.getElementById("inPrice");
    if (select1.value == ""|| inDate.value == '' || inStart.value == '' || inEnd.value == '' || inTimeStart.value == '' || inTimeEnd.value == ''|| inPrice.value == '')
  {
        alert('не все поля заполнены')
    }
    else if (inTimeStart.value >= inTimeEnd.value) {
      alert('укажите верное время')
    }
    else{  
    let li = document.createElement("li");
    let today = new Date();  
    let ul = document.querySelector("ul");      
    ul.appendChild(li).append(select1.value," ", inDate.value, " ",inStart.value,"-", inEnd.value," ", inTimeStart.value,"-", inTimeEnd.value," ", inPrice.value,"$");
    let newRace =new Race(select1.value, inDate.value, inStart.value, inEnd.value, inTimeStart.value, inTimeEnd.value, inPrice.value)


    li.innerHTML+='<div class="dispInl" id="change'+today.getHours()+today.getMinutes() +today.getSeconds()+'"><button type="button" class="changeBtn">change</button><button type="button" class="deleteBtn">delete</button></div>';
    li.innerHTML+='<span><i class="fas fa-check-circle"></i></span>'
    myMap.set('change'+today.getHours()+today.getMinutes() +today.getSeconds()+'',newRace);
    let inpyts = document.getElementsByTagName("input");     
    for(let inpyt of inpyts){inpyt.value =""}
    if (obj.val != undefined && obj.val != "undefined") {
      select1.value = String(obj.val);
    } else {select1.options[0].selected = true;}
    let info = document.getElementById("info");
    info.innerHTML ="";
    changeRace();
    deleteRace();
    checkType();
  }   
}