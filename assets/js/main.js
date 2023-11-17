let products = [];

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((productsData) => {
    products = productsData;
    console.log(products);
    renderProducts(products);
  });

const productsGallery = document.body.querySelector("section");
const filterBtns = document.body.querySelectorAll("button");
const searchInput = document.body.querySelector("#searchInput");
const select = document.body.querySelector("select");
const itemNumbers = document.body.querySelector("#itemNumbers");

const resetProducts = () => (productsGallery.innerHTML = "");

const renderProducts = (productsList) => {
  productsList.forEach((singelProduct) => {
    const div = document.createElement("div");
    const div2 = document.createElement("div");
    const image = document.createElement("img");
    const headline2 = document.createElement("h2");
    const price = document.createElement("h3");
    const addToCart = document.createElement("button");
    div.setAttribute("class", "productCard");
    image.setAttribute("src", singelProduct.image);
    image.setAttribute("alt", "product von SuperFakeStore");
    headline2.textContent = singelProduct.title;
    price.textContent = `$ ${singelProduct.price}`;
    addToCart.textContent = "Add to cart";
    addToCart.setAttribute("onclick", "addNumber()");
    div2.setAttribute("class", "priceCart");
    div2.append(price, addToCart);
    div.append(image, headline2, div2);
    productsGallery.appendChild(div);
  });
};

filterBtns[0].addEventListener("click", () => {
  const electroPro = products.filter(
    (product) => product.category === "electronics"
  );
  resetProducts();
  renderProducts(electroPro);
});

filterBtns[1].addEventListener("click", () => {
  const jeweleryPro = products.filter(
    (product) => product.category === "jewelery"
  );
  resetProducts();
  renderProducts(jeweleryPro);
});

filterBtns[2].addEventListener("click", () => {
  const menPro = products.filter(
    (product) => product.category === "men's clothing"
  );
  resetProducts();
  renderProducts(menPro);
});

filterBtns[3].addEventListener("click", () => {
  const womanPro = products.filter(
    (product) => product.category === "women's clothing"
  );
  resetProducts();
  renderProducts(womanPro);
});

const searchProducts = () => {
  products = products.filter((product) =>
    product.title.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  resetProducts();
  renderProducts();
};

const sortByPrice = () => {
  if (select.value === "lowToHigh") {
    products.sort((product1, product2) => product1.price - product2.price);
    resetProducts();
    renderProducts();
  } else if (select.value === "highToLow") {
    products.sort((product1, product2) => product2.price - product1.price);
    resetProducts();
    renderProducts();
  }
};
let number = 0;
const addNumber = () => {
  number++;
  console.log(number);
  itemNumbers.textContent = number;
};
