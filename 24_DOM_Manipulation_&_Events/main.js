//DOM manipulation & Events
// Select nodes in the DOM

/*const display = document.querySelector(".display");
const control = document.querySelector(".control");

// Create nodes in the DOM
const div = document.createElement("div");
div.classList.add("red-box");

// append elements in the DOM or another node
container.appendChild(div);

// remove Elements from the DOM or another node
container.removeChild(div);

container.style.height = "100px";
container.style.width = "100px";
container.style.backgroundColor = "red";

// desingning html using nodes
const div2 = document.createElement("div");
// div2.style.backgroundColor = "red";
// div2.style.width = "100";
// div2.sty;e.height = "100";

(div2.style.cssText = "style"), "height: 100px; background-color: blue";

div2.setAttribute("style", "height: 100px; background-color: blue;");

container.appendChild(div2);
// working with classes with nodes
div2.classList.add("red-box");
div2.classList.remove("red-box");
div2.classList.toggle("red-box");

div2.textContent = "Hello World!";
div2.style.color = "white"; */

/*
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is a text content!";
container.appendChild(content);*/

const container = document.querySelector("#container");

const paragraph = document.createElement("div");
paragraph.classList.add("paragraph");
paragraph.style.backgroundColor = "red";
paragraph.style.width = "100";
paragraph.style.height = "100";
paragraph.style.color = "white";

paragraph.textContent = "Hey Im red!";
container.appendChild(paragraph);

const h3 = document.createElement("div");
h3.style.backgroundColor = "Blue";
h3.textContent = "Im a blue h3!";
h3.style.color = "white";
container.appendChild(h3);

const div = document.createElement("div");
const p = document.createElement("p");
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";
div.style.width = "100px";
div.style.height = "100px";
div.textContent = "I’m in a div";
p.textContent = "Me Too!";
p.style.border = "1px solid black";
p.style.backgroundColor = "pink";
p.style.width = "100px";
p.style.height = "100px";
p.style.marginBottom = "20px";
container.appendChild(div);
container.appendChild(p);
/*
const btn = document.querySelector("#btn");
btn.addEventListener("click", turnActive);

function turnActive() {
  btn.classList.toogle("active");
} */
