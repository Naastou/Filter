// import data
import products from "./products.js";

// copie du tableau
let filteredProducts = [...products];
// on sélectionne products-container
const productsContainer = document.querySelector(".products-container");
// On affiche le produits
const displaysProducts = (productItem) => {
  if (!filteredProducts.length) {
    productsContainer.innerHTML = `<p>Le produit que vous cherchez est indisponible</p>`;
    return;
  }
  filteredProducts = productItem.map((product) => {
    return `<article class="product">
          <img
            src="${product.image}"
            class="product-img img"
            alt=""
          />
          <footer>
            <h5 class="product-name">${product.title}</h5>
            <span class="product-price">${product.price}</span>
          </footer>
        </article>`;
  });
  filteredProducts = filteredProducts.join("");
  productsContainer.innerHTML = filteredProducts;
};
displaysProducts(products);
// on sélectionne form et imput
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

// on écoute l'évènement keyup
// et on recupère la valeur de limput
form.addEventListener("keyup", () => {
  const inputValue = searchInput.value.toLowerCase();

  // on filtre en fonction de la valeur de l'imput
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displaysProducts(filteredProducts);
});

// on affiche les boutons filtes
const btnContainer = document.querySelector(".companies");

const displayButtons = () => {
  const btns = ["all", ...new Set(products.map((product) => product.company))];

  btnContainer.innerHTML = btns
    .map((company) => {
      return `<button class='company-btn' data-id="${company}">${company}</button>`;
    })
    .join("");
};

displayButtons();

// filter les en foction de la companie avec les buttons

// on sélectionne les bouttons
btnContainer.addEventListener("click", (e) => {
  const element = e.target;

  if (element.classList.contains("company-btn")) {
    if (element.dataset.id === "all") {
      filteredProducts = products;
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === element.dataset.id;
      });
    }

    searchInput.value = "";
    displaysProducts(filteredProducts);
  }
});
