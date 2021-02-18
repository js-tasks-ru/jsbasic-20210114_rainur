export default class StepSlider {
  constructor({ steps, value = 0 }) {
    let elemDiv=document.createElement("div");
    elemDiv.classList.add("slider");

    //шаги слайдера
    let elemDivSliderSteps=``
    for(let i=0;i<steps;i++)
    {
      let active=(i==0 ? ` class="slider__step-active"`: ``)
      elemDivSliderSteps+=`<span${active}></span>`
    }

    let elemDivInfo=` 
    <!--Ползунок слайдера с активным значением-->
    <div class="slider__thumb" style="left: 0%;">
      <span class="slider__value">0</span>
    </div>

    <!--Заполненная часть слайдера-->
    <div class="slider__progress" style="width: 0%;"></div>

    <!--Шаги слайдера-->
    <div class="slider__steps">
     ${elemDivSliderSteps}
    </div>`;

    elemDiv.innerHTML=elemDivInfo
    this.elem=elemDiv
    this.sliderChangeValue(steps);
  }
  sliderChangeValue(steps){
    //добавим обработчик событий

    this.elem.addEventListener('pointermove',function(){

      this.classList.add("slider_dragging");
      let left = event.clientX - this.getBoundingClientRect().left;
      
      let leftRelative = left / this.offsetWidth;

      if (leftRelative < 0) {
        leftRelative = 0;
      }

      if (leftRelative > 1) {
        leftRelative = 1;
      }

      let leftPercents = leftRelative * 100;

      let thumb = this.querySelector('.slider__thumb');
      let progress = this.querySelector('.slider__progress');

      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;

      let segments = steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let sliderValue=this.querySelector('.slider__value');

      sliderValue.innerHTML=value;

      this.dispatchEvent(new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
     detail: value, // значение 0, 1, 2, 3, 4
     bubbles: true // событие всплывает - это понадобится в дальнейшем
    }));
      
      thumb.ondragstart = () => false; 
      
      //this.classList.remove("slider_dragging");
    })

    
    this.elem.addEventListener('click', function(event) {
      //Определим шаг
      let left = event.clientX - this.getBoundingClientRect().left;
      let leftRelative = left / this.offsetWidth;
      let segments = steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = value / segments * 100;
      
      let thumb = this.querySelector('.slider__thumb');
      let progress = this.querySelector('.slider__progress');
      let sliderValue=this.querySelector('.slider__value');

      thumb.style.left = `${valuePercents}%`;
      progress.style.width = `${valuePercents}%`;
      sliderValue.innerHTML=value;

     this.dispatchEvent(new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
     detail: value, // значение 0, 1, 2, 3, 4
     bubbles: true // событие всплывает - это понадобится в дальнейшем
    }));
 
    })   
  }
}
