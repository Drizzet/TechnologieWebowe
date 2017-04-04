var hch = document.getElementById('heading-one');
hch.innerHTML = 'Zmieniona zawartosc';

var zadania = {
	iloscZadan: 10,
  nazwaPrzedmiotu:'Algebra',
  ileZrobionych: 5,
  
  ileZostalo: function(){
  	return(this.iloscZadan - this.ileZrobionych);
  }
};

var NP = zadania.nazwaPrzedmiotu;
var so = document.getElementById('span-one');
so.innerHTML = 'Ucze sie na przedmiot: ' + NP;

var DONE = zadania.ileZostalo();
var NOT = zadania.iloscZadan;
var el = document.getElementById('span-two');
el.innerHTML = 'zrobilem: ' + DONE + ' zadan z ' + NOT; 