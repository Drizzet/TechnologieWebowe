/*Napisz skrypt jezyka JavaScript, który wypisuje na ekranie 
tabliczke mnozenia (dla czynników od 1 do 10).*/

var n = 10;
var tab = [];

for (var i = 0; i < n; i++) {
	tab[i] = []; 
}

for( var i = 0; i < n; i++){
	for( var j = 0; j < n; j++){
		tab[i][j]=(i+1)*(j+1);
		
}
console.log(tab[i]);
}

