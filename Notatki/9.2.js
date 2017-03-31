function reverse(tab){
	var reverse = [];
	var j=0;
	for(var i = tab.length-1; i>=0; i--){	
		reverse[j] = tab[i];
		j++;
	}
	return reverse;
}


var tab = [];
tab = ['a','b','c','d','e'];

tab = reverse(tab);
console.log(tab);
