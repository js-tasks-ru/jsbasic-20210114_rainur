/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let strLower=str.toLowerCase()
  if(strLower.indexOf("1xbet")!=-1 || strLower.indexOf("xxx")!=-1)
  {
    return true;
  }
  else
  {
    return false;
  }
}
