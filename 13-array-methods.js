var articles =[
    { name: 'Bike', price:3000 },
    { name: 'TV', price:2500 },
    { name: 'Book', price:320 },
    { name: 'Mobile', price:10000 },
    { name: 'laptop', price:20000 },
    { name: 'Keyboard', price:500 },
    { name: 'Headset', price:1700 }
]

//Metodos para recorrer arrays

// Metodo Filter
/*Valida si es un true o flase para poder meterlos al nuevo array, y este metodo no modifica el array original  */

var articlesFilter = articles.filter(function(article){
    return article.price <=500/*menor o igual a 500 */
});

console.log(articlesFilter);

//Metodo Map

var nameArticles = articles.map(function(article){
    return article.name
});

//Map es una función que te permite transformar los elementos de una lista y que devuelve una nueva lista con los elementos transformados. ... Map es una función que acepta como parámetro una función y que devuelve un Array

console.log(nameArticles);

//Metodo Find
/* De igual forma, con este metodo se valida un true o false para encontrar un elemento y si está lo regresa y sino, no pasa nada*/

var findArticles = articles.find(function(article){
    return article.name === 'laptop'
});
console.log(findArticles);


//Metodo  forEach
//Ejecuta la función callback una vez por cada elemento del array; a diferencia de map() o reduce() este siempre devuelve el valor undefined y no es encadenable. El típico uso es ejecutar los efectos secundarios al final de la cadena.

articles.forEach(function(article){
    console.log(article.name);
});

//Metodo Some
/*Este metodo nos regresa un false o un true para validar si hay o no articulos que cumplan con la validacion */

var articlesCheap = articles.some(function(article){
    return article.price <= 700;
});
console.log(articlesCheap);

//Metodo Every

/*Este metodo verifica que todos los elementos en el array cumplan con la validacion que ponemos, y al final nos regresa un true o un false */

var articlesCheap1 = articles.every(function(article){
    return article.price <= 700;
});

console.log(articlesCheap1);

//Metodo Reduce
/* Este metodo corre una funcion en cada elemento del array, para comenzar a sumar los costos de cada elemento.*/

var totalCost= articles.reduce(function(currentTotal, article){
    return article.price + currentTotal;
}, 0);//El 0 sera la cantidad inicial con la que comenzara el currentTotal

console.log(totalCost);

// Metodo Includes

var numbers =[1, 2, 3, 4, 5, 6];

var includeNumbers = numeros.includes(2);

console.log(includeNumbers);


