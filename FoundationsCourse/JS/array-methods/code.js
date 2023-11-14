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
  alert(`${item} is at index ${index} in ${array}`);
}

countries.forEach(alrt);





