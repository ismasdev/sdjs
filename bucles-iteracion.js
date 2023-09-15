

//WHILE
/* let num = 0; //definimos la variable num con valor 0.
while (num < 5) { //creamos un bucle con la condicion que mientras  la variable num sea menor q 5 se ejecute.
  num++;  //incrementamos la variable en 1.
  document.write(num + "<br>"); //imprimimos la variable ya incrementada con 1 salto de linea y repetimos la cond. hasta q deje de cumplirse.
} */



//DO-WHILE
/* let num = 0; // Inicializamos la variable "num" con el valor 0.
do { // Iniciamos un bucle "do-while" que se ejecutará al menos una vez.
    console.log("El contador es " + num); // Imprimimos en la consola un mensaje que muestra el valor actual de "contador".
    num++; // Incrementamos "num" en 1.
} while (num < 5); // Continuamos ejecutando el bucle mientras "contador" sea menor que 5.
 */




//CONDICION BREAK (romper, interrumpir)
/* let num = 0  //definimos la variable num como 0
while(num < 1000) { //creamos el bucle que se ejecutara mientras num sea menor a 1000.
    num++;  //incrementamos la variable num en 1.
    console.log(num); //imprimimos en consola la variable num ya incrementada en 1.
    if (num === 25) { //creamos un bucle if, que cuando num sea igual a 25 con el break siguiente dejara de ejecutar el bucle while.
        break; 
    }
} */







 //CONDICION CONTINUE
/*  for (let i = 0; i < 20; i++) {
  
  if (i === 12) {
    continue; //Saltar la iteracion numero 12.
  }
  document.write("Iteración número " + i + "<br>");
}  */
//CONTINUE 2
/*  for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue; // Saltar a la siguiente iteración si el número no es par
  }
  console.log("Número par: " + i);
}   */


//FOR
/* for (let i = 0; i < 20; i++){  //definimos en el mismo bucle: 1)variable. 2)Condicion. 3)Iteracion (i++) o (i--).
  console.log("Iteracion numero" + i + "<br>")
}


//FOR IN
let animales = ["gato", "perro", "vaca"];
//En este caso imprimira el indice o posicion numerica de los elementos.
for (animal in animales){
  document.write(animal + "<br>");  
}

document.write("<br>")

//En este caso imprimira la propiedad del elemento designado en el document.write.
for (animal in animales){
  document.write(animales[2] + "<br>"); 
}


document.write("<br>")


//FOR OF
//En este caso imprimira las propiedades de cada elemento del array.
for (animal of animales){
  document.write(animal + "<br>");
} */


//OTROSO EJEMPLOS DE FOR:

/*  let equipo = {
  delantero: 'Nicolas Schiappacase',
  Mediocampista: 'Santiago Longo',
  Defensor: 'Juan Barinaga',
  Arquero: 'Nahuel Losada',
}

for(jugador in equipo) {
  console.log(equipo);

} 


//Contar cantidad de pelotas total.

let pelotas = {  //se define un array de pelotas de diferentes colores.
  rojas: 20,  //cada pelota tiene definida la cantidad de unidades por color.
  verdes: 5,
  amarillas: 12,
  naranjas: 16,
}

let cantidadPelotas = 0;  //se define la variable cantidad de pelotas y se iguala a 0.
for(color in pelotas) {  //
  console.log(color);
  cantidadPelotas += pelotas[color];
}
console.log(cantidadPelotas); */


/* const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid"
};

for (let propiedad in persona) {
  document.write(propiedad + "<br>");
} */

/* let animales = ["gato", "perro", "vaca"];

for (animal in animales){
  console.log(animal + "<br>");
} */




/* //ARRAY DENTRO DE OTRO ARRAY.
combo1 = ["I9 10900KF", "RTX4090TI", "32GB 4000MHZ"]; //creamos una lista (array1)
combo2 = ["R7 7900X", "RX7900XD", "32GB 42000MHZ", combo1]; //creamos otra lista (array2)


//abrimos un bucle for in en donde se iterara sobre los componentes del array2
for(let componentes in combo2){
  //abrimos una condicion (if) dentro del bucle for in, que cuando los componentes del array 2 sean igual a la posicion 3 (combo1) ... ===>siguiente comentario
  if(componentes == 3){
//se creara otro bucle, en este caso for of, en los que se iterara sobre los componentes del combo1 y se imprimira en pantalla los mismos.
    for(let componentes of combo1){
      document.write(componentes + "<br>")

    } 
    //se creara otra condicion, que mientras no se cumpla la primera condicion "if(componentes == 3)", se imprimiran las otras posiciones del array2.
  }else { 
    document.write(combo2[componentes] + "<br>"); /*  aclaracion: se debe llamar a los componentes de esta forma "combo2[componentes]", ya q si llamamos directamente al componente,
    al estar dentro del bucle for in, este imprimira su posicion */
  }
} */