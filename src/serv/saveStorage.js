import {myMap, obj} from '../main.js';  
export default function saveStorage(){
    let ul = document.querySelector("ul");
    localStorage.setItem('todoList',ul.innerHTML);
    localStorage.setItem ('Map', JSON.stringify([...myMap]));
    localStorage.setItem ('val', obj.val);
}