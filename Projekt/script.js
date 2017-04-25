var d = new Date();
var months = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'wrzesnia', 'pazdziernika', 'listopada', 'grudnia'];
var dt = document.getElementById('datetime');
dt.innerHTML = d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + 'r.'; 

var nw = document.getElementById('intext').value;
