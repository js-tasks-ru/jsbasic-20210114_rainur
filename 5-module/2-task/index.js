function toggleText() {
  //найдем элемент с нужным классом
  let button=document.querySelector(".toggle-text-button")

  //добавим обработчик onClick
  button.addEventListener("click", toggleTextInButon);

  //функция переключения видимости объекта
  function toggleTextInButon()
  {
    //найдем текст с нужным ID
    let text=document.querySelector("#text");
    if(!text.hidden)
      text.setAttribute("hidden", "hidden")
    else
      text.removeAttribute("hidden")
  }
}
