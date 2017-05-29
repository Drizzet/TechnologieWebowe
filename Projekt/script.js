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
	if(tabLength == 0){							//lista jest pusta
		var newElement = document.createElement('h4');
		newElement.innerHTML = "Nie zaplanowałeś żadnych zadań";
		list.appendChild(newElement);
	}
	else{										//ładowanie niepustej listy
	for (var i=0; i<tabLength; i++){
			var newElement = document.createElement('li');
			newElement.innerHTML = tabList[i];
			list.appendChild(newElement);
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
		tabList[tabLength] = '<input type="checkbox" class="check"  id="task' +tabLength+ '" onclick="check()" /> <label>' +input+' ' + '</label><input type="button" class="delete" value="usuń" id="btask' +tabLength+'" onclick="del()" />';
		tabLength++;
	}
	reload();
}

function del(){

	reload();
}

function check(){

}

document.onload = reload();