/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
    //применим фильтр на возраст
    let resultWithCondition = users.filter(function(item) {
      return item.age<=age
  });

  //выведем только имя и зарплату и вернем строку с разделителем
  let results=resultWithCondition.map(function(item){
    return item.name+", "+item.balance
  }).join('\n')

  return results
}
