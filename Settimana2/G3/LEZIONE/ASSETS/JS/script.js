var mioArray = ['Gabriel','AndreaZ','LucaI','Dario', 'Artem','Rosita']

document.getElementById('array').innerHTML += mioArray;

document.getElementById('arrayOrdinato').innerHTML += mioArray.sort();

var eliminato = mioArray.pop();
document.getElementById('array4').innerHTML += mioArray;
document.getElementById('eliminato').innerHTML += eliminato;

var lunghezza = mioArray.push('Alessio');
document.getElementById('array5').innerHTML += mioArray;
document.getElementById('lunghezza').innerHTML += lunghezza;

mioArray.shift()
document.getElementById('array6').innerHTML += mioArray;

mioArray.unshift('AndreaC')
document.getElementById('array7').innerHTML += mioArray;


delete mioArray[2]
document.getElementById('array8').innerHTML += mioArray;

mioArray.splice(2, 1);
document.getElementById('array9').innerHTML += mioArray;

mioArray.splice(1, 2);
document.getElementById('array10').innerHTML += mioArray;

mioArray.splice(1, 1, 'Manuel');
document.getElementById('array11').innerHTML += mioArray;

mioArray.splice(0, 1, 'Pasqua','Thush','Nunzio');
document.getElementById('array12').innerHTML += mioArray;

mioArray.splice(2, 0, 'Flavio');
document.getElementById('array13').innerHTML += mioArray;

var nuovoArray = mioArray.slice(1,4)
document.getElementById('array14').innerHTML += nuovoArray;






