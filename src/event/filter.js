import timer from "./timer.js";
export default function filterIn(btn) {
  let btnFiltrs = document.getElementsByClassName("btnFiltr");
  for (let btn2 of btnFiltrs) {
    btn2.style.backgroundColor = "white";
  }
  btn.style.backgroundColor = "rgb(89, 187, 187)";
  let lists = document.querySelectorAll("li");
  switch (btn.id) {
    case "btnFiltr1":
      for (let li of lists) {
        li.style.display = "block";
      }
      break;
    case "btnFiltr2":
      for (let li of lists) {
        if (timer(li)) {
          li.style.display = "none";
        } else {
          li.style.display = "block";
        }
      }
      break;
    case "btnFiltr3":
      for (let li of lists) {
        if (timer(li)) {
          li.style.display = "block";
        } else {
          li.style.display = "none";
        }
      }
      break;
    case "btnFiltr4":
      for (let li of lists) {
        let el = li.lastChild;
        if (el.style.color == "grey") {
          li.style.display = "none";
        } else {
          li.style.display = "block";
        }
      }
      break;
    default:
      break;
  }
}
