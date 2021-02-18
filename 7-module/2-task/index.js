import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    let elemDiv=document.createElement("div")
    elemDiv.classList.add("modal")

    let elemDivInnerHtml=`    
    <!--Прозрачная подложка перекрывающая интерфейс-->
    <div class="modal__overlay"></div>

    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title">
          
        </h3>
      </div>

      <div class="modal__body">
       
      </div>
    </div>`
    elemDiv.innerHTML=elemDivInnerHtml;
    this.elem=elemDiv;

    this.elem.querySelector(".modal__close").addEventListener("click",function(){
      this.closest(".modal").remove();
      document.body.classList.remove("is-modal-open");
    })

    this.closeByKeyDown();
  }
  setTitle(_title){
    this.elem.querySelector(".modal__title").innerHTML=_title;
  }
  setBody(_body){
    this.elem.querySelector(".modal__body").innerHTML="";
    this.elem.querySelector(".modal__body").append(_body);
  }
  open(){
    document.body.classList.add("is-modal-open")
    document.body.append(this.elem);
  }
  close(){
    this.elem.remove();
    document.body.classList.remove("is-modal-open");
  }
  closeByKeyDown(){
    document.addEventListener('keydown', function(event) {
      
      if (event.code == 'Escape' && document.body.classList.contains('is-modal-open')) {
        
        this.querySelector(".modal").remove();
        document.body.classList.remove("is-modal-open");
      }
    })
  }
}
