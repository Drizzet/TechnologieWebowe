var d = new Date();
var months = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'wrzesnia', 'pazdziernika', 'listopada', 'grudnia'];
var dt = document.getElementById('datetime');
dt.innerHTML = d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + 'r.'; 

var tabList = [];
var tabLength = 0;
var list = document.getElementById('list');

function reload(){
	document.getElementById("intext").value = '';	//czyszczenie pola do wpisywania zadania

	while(list.firstChild){						//usuwanie listy
		list.removeChild(list.firstChild);
	}
	if(tabLength == 0){							//tablica jest pusta
		var pusto = document.createElement('h4');
		pusto.innerHTML = "Nie zaplanowałeś żadnych zadań";
		list.appendChild(pusto);
	}
	else{										//ładowanie niepustej listy
	for (var i=0; i<tabLength; i++){
			var newElement = document.createElement('li');			// Utworzenie nowego elementu i przechowywanie go w zmiennej.
			var newText = document.createTextNode(tabList[i].tekst);	// Utworzenie węzła tekstowego i przechowywanie go w zmiennej.

			var position = list;										// Wyszukanie miejsca, w którym powinien być dodany nowy element.
			
			var	newButton = document.createElement('button');			//przycisk 'usun'
			newButton.setAttribute('class', 'delete'); 
			newButton.textContent = 'Usuń';
			newButton.setAttribute('id', i);
			newButton.onclick = del;
			
			var	newCheck = document.createElement('input');			//checkbox	
			newCheck.type = 'checkbox';
			newCheck.setAttribute('class', 'check');
			if(tabList[i].check == 1){
				newCheck.checked = 'checked';
			}
			newCheck.onclick = check;
			
			newElement.appendChild(newCheck);
			newElement.appendChild(newText);							// Dołączenie nowego węzła tekstowego do nowego elementu.
			newElement.appendChild(newButton);			
			position.appendChild(newElement);							// Wstawienie nowego elementu we wskazanym miejscu.
		}
	}
}

function add(){
	var input = document.getElementById("intext").value;
	input = input.replace(/^\s+|\s+$/gm,'');	//czyszczenie z niepotrzebnych spacji
	if( input === ''){
		alert("Nie mozesz dodac pustego zadania");	//kontrola pustego zadania
	}
	else{
		tabList[tabLength] = { 	tekst: input,
								check: 0};
		tabLength++;
	}
	reload();
}

function del(){
	for(var a = this.id;a <= tabLength-1;a++)
	{
		tabList[a]=tabList[a+1];
	}
	tabLength--;
	reload();
}

function check(){
	if(tabList[this.id].check==1){
	tabList[this.id].check=0;
	}else{
	tabList[this.id].check=1;}
	reload();
}
function keyEnter(event){
	console.log(event.keyCode);
	if(event.keyCode==13){
		add();
	}
}
document.onkeydown = keyEnter;
document.onload = reload();
//'<input type="checkbox" class="check"  id="task' +tabLength+ '" onclick="check()" /> <label>' +input+' ' + '</label><input type="button" class="delete" value="usuń" id="btask' +tabLength+'" onclick="del()" />';