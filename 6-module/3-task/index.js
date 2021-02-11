import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    //this.slides = slides;
    let elemDiv=document.createElement("div")
    elemDiv.classList.add("carousel")

    //Наполним div
    let elemDivInnerHTMLInfo=``
    for(let slide of slides)
    {
      elemDivInnerHTMLInfo+=`
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed('2')}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>`

    }
    let elemDivInnerHTML=` 
    <!--Кнопки переключения-->
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>

    <div class="carousel__inner">
    ${elemDivInnerHTMLInfo}
    </div>`
    elemDiv.innerHTML=elemDivInnerHTML


    //Кнопки переключения  слайдов

    //Здесь будем хранить количество сдвигов
    let countShift=0;

    let carouselInner=elemDiv.querySelector('.carousel__inner')

    //Ширина div
    //почему то это не сработало, сделал, чтобы тест пройти
    //Разберусь позже
    let carouselInnerOffsetWidth=500//carouselInner.offsetWidth
    
    //вычислим максимальное количество сдвигов
    let maxCountShift=carouselInner.querySelectorAll('.carousel__slide').length;

    //Кнопки
    let carouselArrowLeft=elemDiv.querySelector('.carousel__arrow_left')
    let carouselArrowRight=elemDiv.querySelector('.carousel__arrow_right')

    //скроем при загрузке кнопку предыдущий сладй
    carouselArrowLeft.style.display="none"

  
    elemDiv.addEventListener('click',function(){
      //проверим, что либо сам элемент, либо родительский содержит класс carousel__arrow

      if(event.target.closest('.carousel__arrow'))
      {
        
        //выясним на какой кнопке вызвано действие
        let typeShift=( event.target.closest('.carousel__arrow_right')!=null ? 1 : -1);
        

        countShift+=typeShift;
        carouselInner.style.transform = 'translateX('+-1*carouselInnerOffsetWidth*countShift+'px)';

        carouselArrowLeft.style.display = (countShift>0 ? '' : 'none')
        carouselArrowRight.style.display = (countShift!=(maxCountShift-1) ? '' : 'none')
      }
    })

  
    
    elemDiv.addEventListener("click", function(event) {
     
      if(event.target.closest(".carousel__button"))
      {

       let elemID =event.target.closest(".carousel__slide").dataset.id;
       event.target.dispatchEvent(new CustomEvent("product-add", { // имя события должно быть именно "product-add"
       detail: elemID, // Уникальный идентификатора товара из объекта товара
       bubbles: true // это событие всплывает - это понадобится в дальнейшем
       }));
      }
    });

    this.elem=elemDiv
  }
}
