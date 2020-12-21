import { myMap } from "../../main.js";
export default function deleteRaceInp(el) {
  el.parentNode.remove();
  myMap.delete(el.id);
}
