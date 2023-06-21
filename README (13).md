## Filters Project

#### HTML Structure

- section.products

  - div.filters-container

    - form.input-form
      - input.search-input
    - h5(company)
    - article.companies
      - button.company-btn (valeurs temporaires)
    - div.products-container

  - .products-container
    - article.product
      - img.product-img.img (src dans products.js)
      - footer
        - h5.product-name (nom)
        - span.product-price (prix)

#### Afficher les Produits

- importer les produits
- faire une copie du tableau `products` et l'assigner à une nouvelle variable `filteredProducts` (utiliser le mot-clef let)
- sélectionner .products-container
- créer une fonction `displayProducts`, itérer à travers les produits et les afficher

#### Filtrer en fonction du texte

- sélectionner form et input
- écouter l'évènement 'keyup' sur le form
- récupérer la valeur de l'input
- filtrer en fonction de la valeur de l'input
- appeler displayProducts

<details>
<summary><b>SPOILER : </b> Filtrer avec le texte</summary>

```js
// Text Filter
const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
  const inputValue = searchInput.value.toLowercase();

  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });

  displayProducts();
});
```

</details>

#### Tableau Vide

- displayProducts()
- vérifier la longueur de filteredProducts
- si !list.length
- définir productsContainer.textContent = un message

#### Afficher les Boutons Filtre

- créer une fonction displayButtons
- récupérer seulement les noms uniques (Set)
- itérer à travers les résultats
- retourner un bouton avec un data-id
- définir .companies innerHTML égal au résultat

#### Filtrer en fonction de la Compagnie

- ajouter un écouteur d'évènement sur .companies
- regarder event.target
- si l'élément contient .company-btn faire
  - si 'all' retourner tous les produits (copie)
  - sinon filtrer en fonction du nom de la compagnie
- définir la valeur de la recherche à ""
- appeler displayProducts
