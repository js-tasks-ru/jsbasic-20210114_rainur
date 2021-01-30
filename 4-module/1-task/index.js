/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let li=friends.map(function(item){
    return "<li>"+item.lastName+" "+item.firstName+"</li>"
  }).join("")
  let ul= document.createElement("ul");
  ul.innerHTML=li;
  return ul;
}
