import {myMap} from '../main.js';  
export default function clearStorage(){
    let ul = document.querySelector("ul");
    ul.innerHTML= "";
    localStorage.removeItem('todoList');
    localStorage.removeItem('Map');
    myMap.clear();
};