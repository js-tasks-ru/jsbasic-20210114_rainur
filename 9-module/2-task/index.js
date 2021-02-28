import Carousel from '../../6-module/3-task/index.js';
import slides from '../../6-module/3-task/slides.js';

import RibbonMenu from '../../7-module/1-task/index.js';
import categories from '../../7-module/1-task/categories.js';

import StepSlider from '../../7-module/4-task/index.js';
import ProductsGrid from '../../8-module/2-task/index.js';

import CartIcon from '../../8-module/1-task/index.js';
import Cart from '../../8-module/4-task/index.js';

export default class Main {

  constructor() {
  }

  async render() {
    //Карусель
    let carousel = new Carousel(slides);
    let cartCarousel = document.querySelector('[data-carousel-holder]');
    cartCarousel.append(carousel.elem);

    //Меню
    let ribbonMenu = new RibbonMenu(categories);
    let cartRibbon = document.querySelector('[data-ribbon-holder]');
    cartRibbon.append(ribbonMenu.elem);

    //Слайдер
    let stepSlider = new StepSlider({
      steps: 5,
      value:3
    });
    let cartSlider = document.querySelector('[data-slider-holder]');
    cartSlider.append(stepSlider.elem);

    //Корзина
    let basketIkon = new CartIcon ();
    let cartbasketIkon = document.querySelector('[data-cart-icon-holder]');
    cartbasketIkon.append(basketIkon.elem);

    let basket = new Cart(basketIkon);

    //продукты

    try {
      let response = await fetch('products.json');
      let products= await response.json();
      let productGrid = new ProductsGrid(products);
      let productsGrid=document.querySelector('[data-products-grid-holder]')
      productsGrid.innerHTML="";
      productsGrid.append(productGrid.elem);

      this.productsGrid.updateFilter({
        noNuts: document.getElementById('nuts-checkbox').checked,
        vegeterianOnly: document.getElementById('vegeterian-checkbox').checked,
        maxSpiciness: this.stepSlider.value,
        category: this.ribbonMenu.value
      });

    } catch(err) {
   
      
    }

    //осталось добавить фильтры
  }
}
