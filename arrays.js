//ARRAYS (Arreglos)
/* Un array es una estructura de datos que se usa para almacenar una coleccion ordenada
de elementos. Cada elementode un array se puede acceder mediante un indice numerico
contando desde el cero. Estos pueden ser de cualquier tipo (numerico, cadena de texto, objeto,
funcion, etc.) */

/* //array normal.
let frutas = ["banana", "manzana", "sandia", "pera"];
alert(frutas[0]); */

/* //arrays asociativos.
let pc1 = {
    nombre: "KEVLAR KO2 EXTREME MPG",
    procesador: "AMD Ryzen 5 5600x",
    ram:"16GBs 3200mhz HyperX",
    GPU:"EVGA KO RTX 2060Super",
    almacenamiento:"1Tb Barracuda / 240SSD M.2 Kingston",
};

let pc2 = ["Imajjzx PC", "AMD Ryzen 5 5600x", "16GBs 3200mhz HyperX", "EVGA KO RTX 2060Super", "1Tb Barracuda / 240SSD M.2 Kingston"];

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let almacenamiento = pc1["almacenamiento"];
let GPU = pc1["GPU"];

let frase = `El modelo de la PC ES: <b>${nombre}</b> <br>
El procesador que contiene es: <b>${procesador}</b> <br>
El total de RAM que contiene es: <b>${ram}</b> <br>
El almacenamiento es de: <b>${almacenamiento}</b> <br>
La placa de video que contiene es la:<b> ${GPU}</b>`;

document.write(frase); */