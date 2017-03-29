/*Napisz funkcję języka JavaScript, 
która dla nieujemnego argumentu liczbowego 
zwróci jego reprezentację binarną.*/

function bin(x){
	var tab = [];
	var i = 0;
	while(x!=0){
		if(x%2==0){
			tab[i]=0;
			x=x/2;
		}
		else{
			tab[i]=1;
			x=(x-1)/2;
		}
		i++;
	}
	return tab.reverse();
}

var a = 83;
console.log(bin(a));
			
			