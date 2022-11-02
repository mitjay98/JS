const btns = document.querySelectorAll("button");
// btn.onclick = () => {
//   console.log("you have imagination");
// };

const delEL = (event) => {
  console.log(event.target);
  console.log(event.type);
};

btns.forEach((btn) => {
  btn.addEventListener("click", delEL);
});

const link = document.querySelector("a");

link.addEventListener("click", (event) => {
  event.preventDefault();

  console.log(event.target);
});
