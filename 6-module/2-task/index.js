import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    let elemDiv=document.createElement("div")
    elemDiv.classList.add("card")

    let elemInnerHtml=`
    <div class="card__top">
      <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
      <span class="card__price">€${product.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
      <div class="card__title">${product.name}</div>
      <button type="button" class="card__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
    </div>`
    elemDiv.innerHTML=elemInnerHtml
  

    let productAdd=new CustomEvent("product-add", { // имя события должно быть именно "product-add"
    detail: product.id, // Уникальный идентификатора товара из объекта товара
    bubbles: true // это событие всплывает - это понадобится в дальнейшем
    })
    
    

    elemDiv.addEventListener("click", function(event) {
     
      if(event.target.closest(".card__button "))
      {
       event.target.dispatchEvent(productAdd);
      }
    });

    this.elem=elemDiv;
  }
}
