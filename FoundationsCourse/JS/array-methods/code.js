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

array = ['I', 'study', 'JavaScipt', 'right', 'now'];

array.splice(0, 3, "Let's", 'dance');

console.table(array);







