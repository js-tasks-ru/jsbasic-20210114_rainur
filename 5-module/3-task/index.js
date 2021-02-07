function initCarousel() {
  
  //знаю, что можно быстрее,хочу отработать всплытие
  let carousel=document.querySelector('[data-carousel-holder]');

  //Здесь будем хранить количество сдвигов
  let countShift=0;


  let carouselInner=carousel.querySelector('.carousel__inner')

  //Ширина div
  let carouselInnerOffsetWidth=carouselInner.offsetWidth

  //вычислим максимальное количество сдвигов
  let maxCountShift=carouselInner.querySelectorAll('.carousel__slide').length;

  //Кнопки
  let carouselArrowLeft=carousel.querySelector('.carousel__arrow_left')
  let carouselArrowRight=carousel.querySelector('.carousel__arrow_right')

  //скроем при загрузке кнопку предыдущий сладй
  carouselArrowLeft.style.display="none"

 
  carousel.addEventListener('click',function(){
    //провеерим, что либо сам элемент, либо родительский содержит класс carousel__arrow

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
}
