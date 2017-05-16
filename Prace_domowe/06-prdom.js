var h1 = document.getElementsByTagName('h1')[0];
h1.removeAttribute('class');

var z = "rotakifytnedi-ywon";
h1.setAttribute('id', z.split('').reverse().join(''));

var pom = document.getElementsByClassName('wrapper')[0];
var l = document.createElement('a');
pom.appendChild(l);
l.setAttribute('class', 'new-class');
l.setAttribute('href', 'https://sealcode.org');
l.setAttribute('target', 'blank');
var t = document.createTextNode('link');
l.appendChild(t);

var list = document.getElementsByTagName('ul')[0];
while (list.hasChildNodes()) {
    list.removeChild(list.lastChild);
}
for (var i = 1; i <= 30; i++) {
    var newItem = document.createElement('li');
    newItem.setAttribute('id', 'new' + i);
    var newTextItem = document.createTextNode('Nowa treść ' + i);
    newItem.setAttribute('class', 'new-class');
    newItem.appendChild(newTextItem);
    list.appendChild(newItem);
}
 

var p = document.getElementsByTagName('p')[0];
p.innerHTML = "Zmieniona treść akapitu";