/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  result="";
  for(i=0;i<str.length;i++)
  {
    if(i==0)
      result+=str[i].toUpperCase()
    else
      result+=str[i]
  }
  return result;
}
