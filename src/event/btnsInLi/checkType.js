import {myMap, obj} from '../../main.js';
import Race from '../../class/Race.js';
const select = document.querySelector('#select1').getElementsByTagName('option');
export default function checkTypeInp(span){
        let spans =document.getElementsByTagName("span");
        if (span.style.color =='grey'){
        for(let span2 of spans){span2.style.color ='grey';}
        span.style.color ='black';
        let el = span.previousSibling;
        let newRace = myMap.get(el.id);
        obj.val = newRace.type;
        let select1 = document.getElementById('select1')
        select1.value = String(obj.val);
        for (let i = 0; i < select.length; i++) {
          if (select[i].value == String(obj.val)){ select[i].setAttribute("selected", "selected"); }
          else{select[i].removeAttribute("selected");};
        }
      } else{
          span.style.color ='grey'; obj.val = undefined; select1.value ="";
          for (let i = 0; i < select.length; i++) {
            if (select[i].value == ""){ select[i].setAttribute("selected", "selected"); }
            else{select[i].removeAttribute("selected");};
          }
        }
}