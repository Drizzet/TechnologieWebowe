/*Napisz funkcję języka JavaScript, 
która dla nieujemnego argumentu liczbowego 
zwróci jego reprezentację binarną.*/

function bin(x){
	var tab = "";
	while(x != 0){
			tab = (x%2).toString() + tab;
			x = Math.floor(x/2);
	}
	return tab;
}

var a = 83;
console.log(bin(a));
			
			