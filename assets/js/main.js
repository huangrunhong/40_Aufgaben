let products = [];

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((productsData) => {
    products = productsData;
    renderProducts();
    console.log(products);
  });

const productsGallery = document.body.querySelector("section");
const filterBtns = document.body.querySelectorAll("button");
const searchInput = document.body.querySelector("#searchInput");
const select = document.body.querySelector("select");

const resetProducts = () => (productsGallery.innerHTML = "");

const renderProducts = () => {
  products.forEach((singelProduct) => {
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
    div2.setAttribute("class", "priceCart");
    div2.append(price, addToCart);
    div.append(image, headline2, div2);
    productsGallery.appendChild(div);
  });
};

filterBtns[0].addEventListener("click", () => {
  products = products.filter((product) => product.category === "electronics");
  resetProducts();
  renderProducts();
});

filterBtns[1].addEventListener("click", () => {
  products = products.filter((product) => product.category === "jewelery");
  resetProducts();
  renderProducts();
});

filterBtns[2].addEventListener("click", () => {
  products = products.filter(
    (product) => product.category === "men's clothing"
  );

  resetProducts();
  renderProducts();
});

filterBtns[3].addEventListener("click", () => {
  products = products.filter(
    (product) => product.category === "women's clothing"
  );
  resetProducts();
  renderProducts();
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
