// JSON - JAVASCRIPT OBJECT NOTATION

async function fetchShopItems(api) {
  const response = await fetch(api);
  const data = await response.json();

  return data;
}
const shopItems = [
  {
    name: "Product 1",
    price: 18.22,
    description:
      "ayman's terms, Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design. The primary purpose of Lorem Ipsum is to create text that does not distract from the overall layout and visual hierarchy.",
  },
  {
    name: "Product 2",
    price: 38.22,
    description:
      "ayman's terms, Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design. The primary purpose of Lorem Ipsum is to create text that does not distract from the overall layout and visual hierarchy.",
  },
  {
    name: "Product 3",
    price: 28.22,
    description:
      "ayman's terms, Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design. The primary purpose of Lorem Ipsum is to create text that does not distract from the overall layout and visual hierarchy.",
  },
  {
    name: "Product 4",
    price: 68.22,
    description:
      "ayman's terms, Lorem Ipsum is a dummy or placeholder text. It's often used in laying out print, infographics, or web design. The primary purpose of Lorem Ipsum is to create text that does not distract from the overall layout and visual hierarchy.",
  },
];

function renderShopItems(shopItems) {
  const shoppingList = document.getElementById("shopping-list");

  shopItems.forEach((shopItem) => {
    const listItems = document.createElement("li");
    listItems.classList.add("shop-items");
    listItems.innerHTML = `
    <img src=${shopItem.thumbnail}> 
    <h2>${shopItem.title}</h2>  
    <p>price:${shopItem.price}</p>  
    <p>${shopItem.description}</p>
    <p>${shopItem.rating}</p>
    `;

    shoppingList.appendChild(listItems);
  });
}
window.addEventListener("load", async () => {
  const shopItems = await fetchShopItems("https://dummyjson.com/products");
  console.log(shopItems);
  renderShopItems(shopItems.products);
});
