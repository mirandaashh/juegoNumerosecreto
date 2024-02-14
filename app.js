
let numeroSecreto=Math.floor(Math.random()*10)+1;
let numeroUsuario=0;
let numeroIntentos=0;
//let palabraVeces="Vez";
let intentosMaximos=3;
while(numeroUsuario!=numeroSecreto){
    numeroUsuario= parseInt(prompt("Escriba un numero del 1 al 10"));
    numeroIntentos=numeroIntentos+1;
    if(numeroUsuario==numeroSecreto){
         alert(`Felicitaciones, el numero es: ${numeroUsuario} y lo hiciste en ${numeroIntentos} ${numeroIntentos>1 ? "veces" :"vez"}`);
    }
    else{
        if(numeroSecreto>numeroUsuario){
            alert("No, el numero es mayor");
        }else{
            alert("No, el numero es menor");
        }
        //palabraVeces="Veces";
        if(numeroIntentos==intentosMaximos){
            alert(`Llegaste al número máximo de: ${intentosMaximos} intentos`);
            break;
        }
    }
}
//crea un programaque pida al usuario que teclee un número entre 1 y 5,  si escribe que este fuera de ese rango deberá volver a pedir el número
/*slet numero=0;
let numeroMenor=1;
let numeroMayor=5;
while(numero>5||numero<1){
    numero=parseInt (prompt("Ingrese un numero"));
 if(numero>=1 && numero<=5){
    alert("Has acertado");
 }
 else{
   alert3("El numero esta fuera de rango");
 }
 */
// ingrese la letra N o n para poder finlaizr en programa
 /*let letra;
 let respuesta= "N";
 let respuestaX= "n";
 while (letra!=respuestaX&&letra!=respuesta){
     letra= prompt("¿Desea continuar con el programa?")
    if (letra!=respuestaX&&letra!=respuesta){
        alert("Puede contiunuar")
    }
    else
    {
        
        alert("El programa finalizo")
        }             
 }
 */