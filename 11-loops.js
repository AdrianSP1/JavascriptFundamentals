//Los loops (bucles), son manera rapida y sencilla de hacer algo(una tarea) repetidamente

var students =['Maria','Sergio','JuanCarlos','Daniel'];

function helloStudent(students){
    console.log(`Hola ${students}`);
}

for(var i =0; i < students.length;i++){
    helloStudent(students[i]);
}

for(var students of students){
    helloStudent(students);
}

while(students.length > 0){
    //aqui la tarea se hara siempre y cuando sea true, cuando llegue a false, dejara de hacer la tarea.
    var students = students.shift(); // shift() es un metodo que saca un elemento del array de la posicion 0 al a ultima, Pop() comienza de la ultima a la primera.
    helloStudent(students);
}

