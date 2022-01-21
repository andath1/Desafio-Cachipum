/* do { */

let jugadas = prompt("Ingresar cantidad de veces que desea jugar: ")

let cont = 1
let contusu = 0
let contmaq = 0

while (cont <= parseInt(jugadas)) {

    function juego(minimo, maximo) {
        let numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
        return numero;
    }
    /* 
    let machineChoice=Math.floor(Math.random() * (4-1)) +1;
    console.log(machineChoice)
     { */

    let piedra = 0;
    let papel = 1;
    let tijera = 2;

    let opciones = ["Piedra", "Papel", "Tijera"];

    let opcionUsuario;
    let opcionMaquina = juego(0, 2);

    opcionUsuario = prompt("¿Qué eliges?\n 0 : Piedra \n 1 : Papel \n 2 : Tijera", 0);

    alert("Elegiste " + opciones[opcionUsuario]);
    alert("La maquina eligió " + opciones[opcionMaquina]);

    if (opcionUsuario == piedra) {
        if (opcionMaquina == piedra) {
            alert("Empate!");
        } else if (opcionMaquina == papel) {
            alert("Haz perdido contra la maquina");
            contmaq = contmaq + 1;
        } else if (opcionMaquina == tijera) {
            alert("Felicidades Ganaste!!");
            contusu = contusu + 1
        }
    } else if (opcionUsuario == papel) {
        if (opcionMaquina == piedra) {
            alert("Felicidades Ganaste!!");
            contusu = contusu + 1
        } else if (opcionMaquina == papel) {
            alert("Empate!");
        } else if (opcionMaquina == tijera) {
            alert("Haz perdido contra la maquina");
            contmaq = contmaq + 1;
        }
    } else if (opcionUsuario == tijera) {
        if (opcionMaquina == piedra) {
            alert("Haz perdido contra la maquina");
            contmaq = contmaq + 1;
        } else if (opcionMaquina == papel) {
            alert("Felicidades Ganaste!!");
            contusu = contusu + 1
        } else if (opcionMaquina == tijera) {
            alert("Empate!");
        }
    } else {
        alert("Error");
    }
    cont = cont + 1
}
/* prompt("la maquina gano " + contumaq + "tu ganaste " + contusu) */
document.write("ganaste " + contusu + " la maquina gano " + contmaq + " los empates fueron " + (jugadas - contusu - contmaq));
/* let resp
resp = prompt("Desea volver a jugar?: \n 0 : Si \n 1 :No") */
/*  alert(resp)  */

/* }
while (0 == resp); */

/* 
document.write("ganaste " + contusu)
    opcionUsuario = prompt("¿Qué eliges?\n 0 : Piedra \n 1 :Papel \n 2 :Tijera", 1);
     */