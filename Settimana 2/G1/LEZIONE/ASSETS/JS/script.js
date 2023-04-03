document.write('<h3> Dove sarà scritta questa ?'); // 9

document.getElementById('saluto').innerHTML = 'CIAO!'// 3
document.getElementById('saluto2').innerHTML = 'Saluto!'// 4

window.alert('questo è un alert');// 1



console.log('verifica in console')// 5

var valore = 15;// 6
console.log(valore);// 7
console.log(valore + 3);// 8


var numero = 5;
document.getElementById('numero').innerHTML = numero;
document.getElementById('somma').innerHTML = numero + 10;

var altroTesto = 'numero 5';
document.getElementById('altroTesto').innerHTML = altroTesto;

function riassegna() {
    altroTesto = 'Ho cambiato il valore della variabile'
    document.getElementById('altroTesto').innerHTML = altroTesto;
}

setTimeout(riassegna, 2000)

var nome = 'Andrea';

if (nome === undefined){
document.getElementById('errore').innerHTML = 'la variabile è undefined';
} else {
    document.getElementById('errore').innerHTML = 'il valore della variabile è' + nome;
}

function clicca() {
    document.write('😊😊😊😊😊😊😊😊');
}