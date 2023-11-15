let titleStyle = 'color: white; font-size: 24px; font-weight: bold; margin: 12px; border: 4px solid indigo; padding: 12px; border-radius: 10px;';
let subTitleStyle = 'color: white; font-size: 16px;font-weight: bold; margin: 8px; margin: 0; padding: 0';
function title(str) {
  console.log(`%c${str}`, titleStyle);
}
function subTitle(str) {
  console.log(`%c${str}`, subTitleStyle);
}
//We have methods for array like this:
//array.pop();
//array.push();
//array.shift();
//array.unshift();

//delete array;
//Esto borra unicamente el valor de la key index, no borra como tal el elemento y en su lugar deja un valor undefined

let array = ["I", 'go', 'gome'];

console.table(array);

delete array[1];

console.table(array);

//splice
//Este metodo es como una najava suiza para los arrays, con ella se pueden borrar, mover y insertar nuevos elementos a un array funciona de la suigiente manera: 
//Te devuelve como resultado un subarray con los elementos que haz eliminado o sustytuido, estoi es muy util para poder substraer elementos de un array

array = ['I', 'study', 'JavaScipt', 'right', 'now'];

array.splice(0, 3, "Let's", 'dance');

console.table(array);

array.splice(2, 0, 'complex', 'language');

console.table(array);

//negative indexes are allowed


//Slice methods
let subArray = array.slice(2, 4);
console.table(subArray);

//For each loops
let countries = ['Peru', 'Colombia', 'Bolivia', 'China'];

function alrt(item, index, array) {
  console.log(`${item} is at index ${index} in ${array}`);
}

countries.forEach(alrt);


//SEARCH methods
title('SEARCH METHODS');

arr = [1, 0, false];

console.log(arr.indexOf(0));

console.log(arr.indexOf(false));

//Find methods
//Finwindex
//findLastIndex
//Filter


title('TRANSFORM AN ARRAY');

subTitle('Map method and sort method');
console.log('map method and sort method');
console.log('Sort method recive un numero positivo o negativo y trabaja igual de la misma manera esto permite resumir muchas cosas.');



//Tasks
title('Tasks');

function camelize(str) {
  return str.split('-').map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)).join('');
}
subTitle('Camelize function');
let strPrueba = 'esta-es-una-prueba';
let camelizePrueba = camelize(strPrueba);
console.log(`${strPrueba} => ${camelizePrueba}`);

subTitle('Filter range function');

function filterRange(arr, a, b) {
  return arr.filter(i => i >= a && i <= b);
}

let noFiltered = [5, 3, 8, 1];

let filtered = filterRange(noFiltered, 1, 4);

console.log(filtered);

console.log(noFiltered);

