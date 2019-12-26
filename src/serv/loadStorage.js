import {checkType,deleteRace,changeRace, myMap, obj} from '../main.js';  
export default function loadTodo(){
    if(localStorage.getItem('todoList')){
      let ul = document.querySelector("ul");
      ul.innerHTML = localStorage.getItem('todoList');
      document.getElementById('select1').style.display = 'block';
      buttons.style.display ='block';
      document.getElementById("maket").style.display ='block';
    }
    if(localStorage.getItem('Map')){
      let myMap1 = new Map (JSON.parse(localStorage.getItem ('Map')));
      for (let [key, value] of myMap1) {
        myMap.set(key,value)
      }
      changeRace();
      deleteRace();
      checkType();
    }
    if(localStorage.getItem('val')){
      let val1 = localStorage.getItem('val');
      obj.val = val1;
      let select1 = document.getElementById('select1');
      if (val1 != undefined && val1 != "undefined") {
        select1.value = String(obj.val);
      } else {select1.options[0].selected = true;}
    } else {select1.options[0].selected = true;}
}