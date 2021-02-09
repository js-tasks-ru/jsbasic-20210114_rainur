/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    for(let row of table.rows)
    {
        /*Проставить класс available/unavailable в зависимости от значения атрибута data-available у ячейки Status. Если её значение true – класс available, если её значение false – класс unavailable.
Проставить атрибут hidden, если атрибута data-available нет вообще. */
        let cellStatusAvailable=row.cells[3].dataset.available
        if(cellStatusAvailable=="true")
            row.classList.add('available')
        else if(cellStatusAvailable=="false")
            row.classList.add('unavailable')
        else if(cellStatusAvailable==undefined)
            row.hidden=true
        /*Проставить класс male/female в зависимости от содержимого ячейки Gender. Если её значение m – класс male, Если её значение f – класс female. */
        let cellGenderText=row.cells[2].innerHTML;
        if(cellGenderText=="m")
            row.classList.add("male")
        else if(cellGenderText=="f")
            row.classList.add("female")

        /*Добавить inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18.*/
        let cellAgeText=parseInt(row.cells[1].innerHTML,0);
        if(cellAgeText<18)
            row.style.textDecoration="line-through"
        

    }
}
