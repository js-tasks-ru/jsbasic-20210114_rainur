/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let result=0;
  for(let key in salaries)
  {
    let val=parseInt(salaries[key])
    result+=(!isNaN(val) ? val : 0)
  }
  return result
}
