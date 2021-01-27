/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  return str.split('-').map(function(item,index){
    if(index==0)
      return item;
      
    let result="";
    for(let i=0;i<item.length;i++)
    {
      if(i==0)
        result+=item[i].toUpperCase()
      else
        result+=item[i]
    }
    return result
  }).join("")
}
