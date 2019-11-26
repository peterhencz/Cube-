import _ from "lodash";
import { doA, randomColor } from "../utils";
import { createSquares } from "./square.js";
import "../styles/main.css";

function squarePage() {
  const element = doA("div");
  const squareContainer = doA("div", "square-container");

  squareContainer.style.width = `${window.innerWidth / 2}px`;
  squareContainer.style.height = `${window.innerWidth / 2}px`;
  squareContainer.style.overflow = "hidden";
  const squares = createSquares();

  squares.forEach(square => squareContainer.appendChild(square));

  return element;
}

// document.body.appendChild(squarePage());
function squareService() {
  const squareHover = document.querySelectorAll(".square");
  for (let i = 0; i < squareHover.length; i++) {
    squareHover[i].addEventListener("mouseenter", function() {
      squareHover[i].classList.remove("square");
      squareHover[i].style.backgroundColor = randomColor();
      squareHover[i].style.animation = "squareHover";
    });
    console.log(randomColor());
    squareHover[i].addEventListener("click", function() {});
  }
}
