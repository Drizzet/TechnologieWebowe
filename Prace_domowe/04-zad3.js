/*Napisz funkcję języka JavaScript, 
która wyszukuje zadany element x w tablicy,
zwraca go oraz jego indeks (jeśli jest kilka takich elementów,
 zwracany jest indeks pierwszego z nich). 
 Argumentem tej funkcji jest tablica. */
 
 function find(tab,x){
	 var i=0;
	 while(tab[i]!=x && i <= tab.length){
	 i++;}
	 if(i>tab.length)
		 i=-0;
	 return i;
 }
 
 var tab=[];
 tab = [1, 3, 5, 7, 11, 13, 17, 19, 23];
 
 var index = find(tab, 13);
 
 console.log(index);