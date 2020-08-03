const arrayli = $(".curriculum-item-link--curriculum-item--KX9MD");
let li;

for (let index = 0; index < arrayli.length; index++) {
    const element = arrayli[index];
    if (element.getAttributeNode("aria-current").value == "true") {
        li = element;
    }
}
let tituloCapitulo = li.children[0].getAttributeNode('aria-label').value;
let nombreSeccion = li.parentElement.parentElement.children[0].children[0].children[0].children[0].textContent;
var videoLink = document.querySelector(".vjs-tech").getAttribute('src');

console.log(nombreSeccion);
console.log(tituloCapitulo);

console.log(videoLink);