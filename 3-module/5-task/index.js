/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let needArray=[]
  let strArray=str.split(",")
  for(let elem of strArray)
  {
    let elemArray=elem.split(" ")
    for(let elem2 of elemArray)
    {
     let needValue=parseFloat(elem2)
     if(!isNaN(needValue))
      needArray.push(needValue)
    }
  }
  //без этого почему то не правильно шла сортировка
  needArray=needArray.sort(function(a,b) { return a - b;})
  
  let result={
    min:needArray[0],
    max:needArray[needArray.length-1],
  }
  return result
}
