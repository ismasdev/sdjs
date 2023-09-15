//CONCATENACIONES;
saludo = "Hola Usuario!";
pregunta = " Como estas?";
frase = saludo + pregunta;
document.write(frase);
//Se concatenan ambos strings

//concatenar numeros aplicando un string ("")

num1 = 10;
num2 = 5;
concatenacion = "" + num1 + num2; //al aplicar el string en la variable fuerza todo a ser un string.
document.write(concatenacion); 
//o
num1 = "10";
num2 = "5";  //al denominar lons enteros con comillas estas se convierten en string y se concatenan en lugar de sumarse;
concatenacion = num1 + num2;
document.write(concatenacion);

//concatenar con concat; Para utilizar este debemos tener al menos una variable definida como string;
num1= "10";
num2= 5;
frase = num1.concat(num2);
document.write(frase);

//concatenar con ${}
nombre= "Ismael Sanchez"
frase = `soy ${nombre} y estoy en IsmaDEV`; //Hay q colocar backticks de comienzo (`al principio y final`);
document.write(frase);

//Escape de comillas simples;
frase = 'Hola soy "Ismael" y esto es DEV'; //Se utiliza comillas simples para poder utilizar dentro del string comillas dobles para destacar algo;
document.write(frase);
//Lo mismo pero al reves;
//Escape de comillas dobles;
frase = "Hola soy 'Ismael' y esto es DEV"; //Se utiliza comillas dobles para poder utilizar dentro del string comillas simples para destacar algo;
document.write(frase);