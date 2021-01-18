/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  let result="";
  let str_length=str.length;
  if(str_length<=maxlength)
  {
    result=str;
  }
  else
  {
    for(i=0;i<=maxlength-2;i++)
    {
      result+=str[i]
    }
    result+="…"
  }
  return result;

}
