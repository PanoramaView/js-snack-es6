/* SNACK 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. 
Usiamo i nuovi metodi degli array foreach o filter.
*/
function myFunction(arr, a, b) {
    b = b + 1;
    return arr.slice(a, b);
}

function myFilter(arr, a, b) {
    return arr.filter(function(element, index){
        console.log(`Posizione: ${index}, check: ${index >= a && index <= b}`)
        if (index >= a && index <= b){
            return true;
        } else {
            return false;
        }
    })
}
function myForEach(arr, a, b) {
    const result = [];
    arr.forEach((element, index) => {
        if (index >= a && index <= b){
            result.push(element);
        }
    });
    return result;
}



var start = parseInt(prompt("Numero inizio: "));
var end = parseInt(prompt("Numero fine: "));

var array1 = [1, 2, 3, 4, 5];
var array2 = myFunction(array1, start, end);
var array3 = myFilter(array1, start, end);
var array4 = myForEach(array1, start, end);

console.log("myFunction :" + array2);
console.log("myFilter :" + array3);
console.log("myForEach :" + array4);
