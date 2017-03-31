var n = 5; // deklaracja rozmiaru tablicy tab
var tab = []; // stworzenie jednowymiarowej tablicy

for (var i = 0; i < n; i++) {
	tab[i] = []; // kazdy element tablicy jednowymiarowej staje sie nowa tablica, dzieki czemu mamy tablice dwuwymiarowa
}

for( var i = 0; i < n; i++){
	for( var j = 0; j < n; j++){
		if( j <= i)
			tab[i][j]=(i+1)*(j+1);
		else
			tab[i][j]=0;
		
}}

console.log(tab);