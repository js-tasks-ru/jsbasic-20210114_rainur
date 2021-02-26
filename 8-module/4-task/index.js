import createElement from '../../assets/lib/create-element.js';
import escapeHtml from '../../assets/lib/escape-html.js';

import Modal from '../../7-module/2-task/index.js';

export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;

    this.addEventListeners();
  }

  addProduct(product) {
    //проверим есть ли в массиве такой товар
    let haveProduct = this.cartItems.find(item => item.product.id == product.id);
    if(haveProduct==undefined)
    {
      let newProduct={
        product: product,
        count: 1
      }
      this.cartItems.push(newProduct)
      this.onProductUpdate(newProduct);
    }
    else
    {
      haveProduct.count=haveProduct.count+1;
      this.onProductUpdate(haveProduct);
    }


  }

  updateProductCount(productId, amount) {
    //проверим есть ли в массиве такой товар
    let haveProduct = this.cartItems.find(item => item.product.id == productId);
    if(haveProduct!=undefined)
    {
      let productCount=haveProduct.count+amount;
      if(productCount>0)
        haveProduct.count=haveProduct.count+amount;
      else
      {
        let haveProductIndex=this.cartItems.indexOf(haveProduct)
        this.cartItems.splice(haveProductIndex,1)
        
      }

      this.onProductUpdate(haveProduct);
    }
  }

  isEmpty() {
    return (this.getTotalCount()==0)
  }

  getTotalCount() {
    return this.cartItems.reduce((sum, current) => sum + current.count, 0);
  }

  getTotalPrice() {
    return this.cartItems.reduce((sum, current) => sum + current.count*current.product.price, 0);
  }


  renderProduct(product, count) {
    return createElement(`
    <div class="cart-product" data-product-id="${
      product.id
    }">
      <div class="cart-product__img">
        <img src="/assets/images/products/${product.image}" alt="product">
      </div>
      <div class="cart-product__info">
        <div class="cart-product__title">${escapeHtml(product.name)}</div>
        <div class="cart-product__price-wrap">
          <div class="cart-counter">
            <button type="button" class="cart-counter__button cart-counter__button_minus">
              <img src="/assets/images/icons/square-minus-icon.svg" alt="minus">
            </button>
            <span class="cart-counter__count">${count}</span>
            <button type="button" class="cart-counter__button cart-counter__button_plus">
              <img src="/assets/images/icons/square-plus-icon.svg" alt="plus">
            </button>
          </div>
          <div class="cart-product__price">€${product.price.toFixed(2)}</div>
        </div>
      </div>
    </div>`);
  }

  renderOrderForm() {
    return createElement(`<form class="cart-form">
      <h5 class="cart-form__title">Delivery</h5>
      <div class="cart-form__group cart-form__group_row">
        <input name="name" type="text" class="cart-form__input" placeholder="Name" required value="Santa Claus">
        <input name="email" type="email" class="cart-form__input" placeholder="Email" required value="john@gmail.com">
        <input name="tel" type="tel" class="cart-form__input" placeholder="Phone" required value="+1234567">
      </div>
      <div class="cart-form__group">
        <input name="address" type="text" class="cart-form__input" placeholder="Address" required value="North, Lapland, Snow Home">
      </div>
      <div class="cart-buttons">
        <div class="cart-buttons__buttons btn-group">
          <div class="cart-buttons__info">
            <span class="cart-buttons__info-text">total</span>
            <span class="cart-buttons__info-price">€${this.getTotalPrice().toFixed(
              2
            )}</span>
          </div>
          <button type="submit" class="cart-buttons__button btn-group__button button">order</button>
        </div>
      </div>
    </form>`);
  }

  renderModal() {

    //откроем диалог
    let modal = new Modal();
      modal.setTitle('Your order');
      let products=document.createElement("div");
      for(let cartItem of this.cartItems){
        products.append(this.renderProduct(cartItem.product,cartItem.count))
      }
      products.append(this.renderOrderForm())
      modal.setBody(products);
      modal.open();
    this.modal=modal

      //добавим дейсвтие на кнопки
     modal.elem.addEventListener('click',()=>{
        if(event.target.closest(".cart-counter__button")){
          let amount=(event.target.closest(".cart-counter__button_minus") ? -1 : 1)
          let productId= event.target.closest(".cart-product").dataset.productId;
          this.updateProductCount(productId,amount)
        }
     })

  }

  onProductUpdate(cartItem) {
    //проверим открыто ли модальное окно
    if(document.body.classList.contains('is-modal-open')){
      
      let productId = cartItem.product.id; // Уникальный идентификатора товара (для примера)
      let modalBody = this.modal.elem;

      // Элемент, который хранит количество товаров с таким productId в корзине 
      let productCount = modalBody.querySelector(`[data-product-id="${productId}"] .cart-counter__count`);
 
      // Элемент с общей стоимостью всех единиц этого товара
      let productPrice = modalBody.querySelector(`[data-product-id="${productId}"] .cart-product__price`);

      // Элемент с суммарной стоимостью всех товаров
      let infoPrice = modalBody.querySelector(`.cart-buttons__info-price`);
      
      
      if(this.getTotalCount()==0)
      {
        this.modal.close();
      }
      else
      {
        productCount.innerHTML=cartItem.count
        productPrice.innerHTML =`€${(cartItem.count*cartItem.product.price).toFixed(2)}`
        infoPrice.innerHTML = `€${this.getTotalPrice().toFixed(2)}`;
      }
        
      
    }

    this.cartIcon.update(this);
  }

  onSubmit(event) {
    // ...ваш код
    //пока не готово
  };

  addEventListeners() {
    this.cartIcon.elem.onclick = () => this.renderModal();
  }
}

