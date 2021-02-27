import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    //this.categories = categories;
    //Корневой элемент RibbonMenu
    let elemDiv=document.createElement("div");
    elemDiv.classList.add("ribbon")

    let elemDivInfo=``
    let a=0;
    for(let categorie of categories)
    {
      a++;
      elemDivInfo+=`<a href="#" class="ribbon__item${a==1 ? ' ribbon__item_active' : ''}" data-id="${categorie.id}">${categorie.name}</a>`
    }

    elemDiv.innerHTML=`<!--Кнопка прокрутки влево-->
    <button class="ribbon__arrow ribbon__arrow_left">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>

    <!--Ссылки на категории-->
    <nav class="ribbon__inner">
      ${elemDivInfo}
    </nav>

    <!--Кнопка прокрутки вправо-->
    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>`
    
    //выведем меню
    this.elem=elemDiv;

    //добавим скроллинг
    this.scrolling();

    //выбор конкретной категории
    this.item_active();
  }
  
  scrolling(){
    // Найдем ribbonInner
    let ribbonInner=this.elem.querySelector(".ribbon__inner")

    //найдем ribbon__arrow_right и навесим действие на click 

    let ribbonArrowRight=this.elem.querySelector(".ribbon__arrow_right")
    ribbonArrowRight.addEventListener('click',function(){
      ribbonInner.scrollBy(350, 0)
    })

    //найдем ribbon__arrow_left и навесим действие на click 
    let ribbonArrowLeft=this.elem.querySelector(".ribbon__arrow_left")
    ribbonArrowLeft.addEventListener('click',function(){
      ribbonInner.scrollBy(-350, 0)
    })
    
    //добавим действие на scroll
    ribbonInner.addEventListener('scroll',function(){
      
      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if( scrollRight<1)
      {
        ribbonArrowLeft.classList.add("ribbon__arrow_visible");
        ribbonArrowRight.classList.remove("ribbon__arrow_visible");
        
      }
       
      if( scrollLeft<1)
      {
        ribbonArrowLeft.classList.remove("ribbon__arrow_visible");
        ribbonArrowRight.classList.add("ribbon__arrow_visible");
        
      }

    })
  }
  item_active(){
    // Найдем ribbonInner
    let ribbonInner=this.elem.querySelector(".ribbon__inner")
    let ribbonItems=ribbonInner.querySelectorAll(".ribbon__item")

    ribbonInner.addEventListener('click',function(event){

      
      if(event.target.closest('.ribbon__item'))
      {
        event.preventDefault();
        for(let ribbonItem of ribbonItems)
        {
          ribbonItem.classList.remove("ribbon__item_active")
        }
        event.target.closest('.ribbon__item').classList.add("ribbon__item_active")
        
        let elemID = event.target.closest('.ribbon__item').dataset.id;
        event.target.dispatchEvent(new CustomEvent('ribbon-select', { // имя события должно быть именно 'ribbon-select'
        detail: elemID, // уникальный идентификатора категории из её объекта
        bubbles: true // это событие всплывает - это понадобится в дальнейшем
      }));



      }
      

    })
  } 
}
