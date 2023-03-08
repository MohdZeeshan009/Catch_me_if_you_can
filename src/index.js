import "./styles.css";
let ball = document.querySelector(".circle");
let main = document.getElementsByTagName("main")[0];
console.log(main);

ball.addEventListener("click", function () {
  let randomWidth = `${Math.floor(Math.random() * (main.offsetWidth - 100))}px`;
  let randomHeight = `${Math.floor(
    Math.random() * (main.offsetHeight - 100)
  )}px`;

  ball.style.left = `${randomWidth}`;
  ball.style.top = `${randomHeight}`;
});
