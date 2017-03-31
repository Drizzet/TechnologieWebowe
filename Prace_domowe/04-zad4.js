/*Napisz funkcję języka JavaScript, 
która dla nieujemnego argumentu liczbowego 
zwróci jego reprezentację binarną.*/

function bin(x){
	var tab = [];
	var i = 0;
	while(x != 0){
			tab[i] = x%2;
			x = Math.floor(x/2);
			i++;
	}
	return tab.reverse();
}

var a = 83;
console.log(bin(a));
			
			