/* //OPERADORES DE ASIGNACION

//SUMA (+)
let num1 = 10;
let num2 = 5;
resultado = num1+num2;
alert(resultado);

//RESTA (-)
let num1=10;
let num2=5;
resultado=num1-num2;
alert(resultado);

//DECREMENTO (--) se debe imprimir el resultado despues de hecho el calculo si no arrojara el mismo resultado de la variable q se dio primero;
let num1 = 10;
num1--;
resultado=num1;
alert(resultado)

//INCREMENTO (++) se debe imprimir el resultado despues de hecho el calculo si no arrojara el mismo resultado de la variable q se dio primero;
let num1=10;
num1++;
resultado=num1;
alert(resultado);


//DIVISION (/)
let num1 = 10;
let num2 = 5;
resultado = num1/num2;
alert(resultado);

//MULTIPLICACION (*)
let num1=10;
let num2=5;
resultado=num1*num2;
alert(resultado);

//EXPONENCIAR (**)
let num1=10;
let num2= 5;
resultado =num1**num2;
alert(resultado);

//RESTO o SOBRANTE (%)
let num1=10;
let num2=5;   //10 dividido 5 es 2, y sobran 0;
resultado=num1%num2;
alert(resultado);


//NEGACION UNARIA o NUMERO NEGATIVO
let num1=10;
let num2=5;
resultado=num1+num2;
alert(-resultado); //Arroja el resultado en negativo al poner el (-)

//UNARIO POSITIVO o NUMERO POSITIVO
let num1=5;
let num2=10;
resultado=num1-num2;
alert(+resultado); //Arroja el resultado en positivo al poner el (+) */





//OPERADORES DE COMPARACION

/* //comparar;
let num = 23;
let num2 = 13;
//Aclaracion: un solo (=)asigna una variable, en cambio (==) compara, y (===) compara estrictamente
//es decir, compara q tipo de datos son (string, int, etc); 
resultado = num == num2;
alert(resultado);  */

/* //inigualdad o distinto;
//Aclaracion:(!=) compara si son distintos, y (!==) compara estrictamente
//es decir, compara tambien que tipo de datos son (string, int, etc); 
let num = "23";
let num2 = 23;
resultado = num !== num2;
alert(resultado); 


/* //mayor que (>) o mayor o igual que (>=);
let num = 23;
let num2 = 23;
resultado = num > num2;  // (33 es mayor q 23? = verdadero)
alert(resultado);
 */


/* //menor que (<) o menor o igual que (<=);
let num = 33;
let num2 = 23;
resultado = num < num2;  // (33 es menor q 23? = falso)
alert(resultado); */




//OPERADORES LOGICOS

//Existen 3 tipos de operadores logicos. (AND &&), (OR ||), (NOT !)
// AND (&&): Si existe aunque sea un false, arroja false.
// OR (||): Si existe aunque sea un true, arroja true.
// NOT (!): Convierte el valor booleano a lo contrario

/* //AND ej:
let num1=12;
let num2=24;

let afirmacion1= num1>num2;  //false
let afirmacion2= num1!=num2; //true

let resultado = afirmacion1 && afirmacion2; 
alert(resultado);  // El resultado es false xq una de las afirmaciones es false y al utilizar && y existir un false arroja false. */

/* //OR ej:
let num1=12;
let num2=24;

let afirmacion1= num1>num2;  //false
let afirmacion2= num1!=num2; //true

let resultado = afirmacion1 || afirmacion2; 
alert(resultado);  // El resultado es true xq una de las afirmaciones es true y al utilizar || y al existir un true arroja true. */

/* //NOT ej:
let num1=12;
let num2=24;

let afirmacion1= num1>num2;  //false
let afirmacion2= num1!=num2; //true

let resultado = afirmacion1 || afirmacion2; 
alert(!resultado); //El resultado es false xq al colocar el operador NOT (!) en el resultado este pasa al valor booleano contrario. */