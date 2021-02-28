/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    //создадим div
    let elemDiv=document.createElement("div")
    elemDiv.classList.add("needDiv")

    //наполним данные из цикла
    let elemTableTbody=``;
    for(let row of rows)
    {
      /* Знаю, что решение с onclick в button неоптимальное, но по другму через innerHtml не придумал*/
      elemTableTbody+=`
      <tr>
        <td>${row.name}</td>
        <td>${row.age}</td>
        <td>${row.salary}</td>
        <td>${row.city}</td>
        <td><button onClick="this.parentNode.parentNode.remove();">X</button></td>
      </tr>`;
    }

    let elem=`<table>
    <thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    ${elemTableTbody}
    </tbody>
  </table>`;

    elemDiv.innerHTML=elem;
    
    this.elem=elemDiv;


  }
}
