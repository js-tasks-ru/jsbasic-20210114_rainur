/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let lis=friends.map(function(item){
    return `<li>${item.lastName} ${item.firstName}</li>`
  }).join("")
  let ul= document.createElement("ul");
  ul.innerHTML=lis;
  return ul;
}
