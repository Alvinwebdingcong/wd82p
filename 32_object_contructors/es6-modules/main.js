import "./style.css";
import dogFactory from "./factories/dogFactory";
const dog1 = dogFactory("Doggy", "Golden Retriver");
console.log(dog1);

document.querySelector("#app").innerHTML = `
  <div>
  <p>My Dog name is ${dog1.name} and he is a ${dog1.breed}</p>

  </div>
`;
