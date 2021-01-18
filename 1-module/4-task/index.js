/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let str_lower=str.toLowerCase()
  if(str_lower.indexOf("1xbet")!=-1 || str_lower.indexOf("xxx")!=-1)
  {
    return true;
  }
  else
  {
    return false;
  }
}
