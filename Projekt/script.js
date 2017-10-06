var d = new Date();
var months = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'wrzesnia', 'pazdziernika', 'listopada', 'grudnia'];
var dt = document.getElementById('datetime');
dt.innerHTML = d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + 'r.'; 

var tabList = [];
var tabLength = 0;
var list = document.getElementById('list');
var url='http://sealcode.org:8082/api/v1/resources/task';		//API sealcodowe

function reload(){
	console.log('refreszuje, tabLength: ',tabLength);
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
			var newText = document.createTextNode(tabList[i].body.title + ' ');	// Utworzenie węzła tekstowego i przechowywanie go w zmiennej.
			console.log('dodaje do listy ',newText);
			var position = list;										// Wyszukanie miejsca, w którym powinien być dodany nowy element.
			
			var	newButton = document.createElement('button');			//przycisk 'usun'
			newButton.setAttribute('class', 'delete'); 
			newButton.textContent = 'Usuń';
			newButton.setAttribute('id', i);
			newButton.onclick = del;
			
			var	newCheck = document.createElement('input');			//checkbox	
			newCheck.type = 'checkbox';
			newCheck.setAttribute('class', 'check');
			if(tabList[i].body.is_done == true){
				newCheck.checked = 'checked';
			}
			newCheck.setAttribute('id', i);
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
		
		tabList[tabLength] = { 	title: input,
								is_done: false};
		//tabLength++;
	
	qwest.post(url, {title: tabList[tabLength].title, is_done: tabList[tabLength].is_done}, {cache: true});
	}
	console.log('dodaje taska, tabLength: ',tabLength);
	//window.location.reload();
	getTasks();
	//reload();
}

function del(){
	//tabList.splice(this.id,1);
	qwest.delete(url+'/'+tabList[this.id].id, null, {cache: true}).then(function(xhr, response){
	//window.location.reload();
	getTasks();
	//reload();
	//tabLength--;
	})
}

function check(){
	
	/*if(tabList[this.id].check==true){
	tabList[this.id].check=false;
	}else{
	tabList[this.id].check=true;}*/
	tabList[this.id].body.is_done = this.checked;
	qwest.map('PATCH', url+'/'+tabList[this.id].id, tabList[this.id].body, {cache: true}).then(function(xhr, response) { // szukamy odpowiedniego zasobu na serwerze i modyfikujemy jego ciało
	getTasks();
	//window.location.reload();//	getTasks(); // odświeżamy stan strony
	});
}
function keyEnter(event){
	//console.log(event.keyCode);
	if(event.keyCode==13){
		add();
	}
}

document.onkeydown = keyEnter;
document.onload = getTasks();

//Funkcje API -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//pobieranie danych
function getTasks() { // pobieramy listę zadań po wystąpieniu odpowiedniego zdarzenia
	tabList = [];
	tabLength = 0;
	qwest.get(url, {}, {cache: true}).then(
		function(xhr, response) {
			response.forEach(function(element) { // wywołujemy dla każdego pobranego zasobu
				tabList.push(element);//tasks.push(element); // dodajemy pobrany element zasobu do tablicy "tasks"
				/* Teraz treść danego zadania i jego inne własciwości będą ukrywać się w tasks[index].body.nazwaWlasciwosci, np. tasks[0].body.title - nazwa pierwszego zadania w tablicy! */
				tabLength++;
				console.log('getuje task');
				reload();// odświeżamy stan strony
	})});
}
/*
//wysylanie zasobu
function addTaskServer(task) { // wysyłamy nowe zadanie po wciśnięciu klawisza ENTER lub kliknięciu przycisku
	qwest.post(url, {title: task.title, is_done: task.is_done}, {cache: true}); // wysłanie nowego zadania w postaci obiektu o właściwościach "title" i "is_done"
}

//czesciowa aktualizacja zasobu
function checkboxClick(event) { // stan kliknięcia checkboxa przy danym zadaniu (załóżmy, że funkcja wywołuje się po wystąpieniu pewnego zdarzenia
	tasks[this.id].body.is_done = this.checked; // zmiana stanu kliknięcia danego zadania w tablicy (zakładamy, że każde zadanie ma swój identyfikator, dla uproszczenia przyjąłem, że identyfikatorem jest pozycja w tablicy
	qwest.map('PATCH', url+'/'+tasks[this.id].id, tasks[this.id].body, {cache: true}).then(function(xhr, response) { // szukamy odpowiedniego zasobu na serwerze i modyfikujemy jego ciało
		refresh(); // odświeżamy stan strony
	});
}

//usuwanie zasobu
function deleteTask() { // usuwanie wybranego zadania pod wpływem wystąpienia pewnego zdarzenia
	qwest.delete(url+'/'+tasks[this.id].id, null, {cache: true}).then(function(xhr, response) { // usuwamy zadanie o danym identyfikatorze (tym razem nie musimy przesyłać ciała takiego zadania)
		refresh(); // odświeżamy stan strony
	});
}*/