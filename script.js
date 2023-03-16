let a1 = 50;
let bx = 800;
let by = 400;

let a;
let b;
let c;
//Angulos
let z;





//Calculadora INPUT

function calcular(){
    a= document.getElementById("cateto1").value;
    b= document.getElementById("cateto2").value;

    document.getElementById("ca").innerHTML = a;
    document.getElementById("cb").innerHTML = b;
    
    c = Math.sqrt(a * a + b * b)        //Calculamos hipotenusa
    document.getElementById("ch").innerHTML = c.toFixed(3);     //Lo escribimos con innerHTML


    //Calculo para el canvas

    if(a) {
        a1 = 400 - Number(a);
        console.log("si")
    }else{
        console.log("no")
    }

    if(b){
        bx = 250 + Number(b);
        comenzar();
    }
  

}

function reset(){
    a1 = 50;
    bx = 800;
    a = undefined;
    b = undefined;
    z = undefined;
    comenzar();
}



//Dibujar con la API canvas el triangulo en cuestion
//https://www.youtube.com/watch?v=nK1lhvZ_tJc&ab_channel=pildorasinformaticas
function comenzar() {
    let elemento = document.getElementById("lienzo")    //Indicar que id= figure es variable elemento
    let lienzo = elemento.getContext("2d")

    //Para hacer rectangulo
    //lienzo.fillStyle = "blue"               //Fill para tenerlo lleno, stroke para vacio
    //lienzo.fillRect(360,70,300,300)    //Las dos primeras son cordenadas en las que saldra el canvas y las dos ultimas el width height
    
    lienzo.clearRect(0, 0, elemento.width, elemento.height); // Limpiamos el canvas antes de dibujar el triángulo

    //TRIANGULO
    lienzo.beginPath();

    lienzo.moveTo(250, a1);           //Cordenadas donde comienza a dibujar                   Primer vertice        El de arriba
    lienzo.lineTo(250,400);         //Desde cordenadas donde esta a nuevas cordenadas       Segundo vertice         El de 90º  
    lienzo.lineTo(bx,by);         //Tercer vertice

    lienzo.closePath();
    lienzo.lineWidth = 3;       //Hacemos el triangulo con mas width
    lienzo.stroke();





//----------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------//
    //Texto dentro del lienzo 

    lienzo.font = "18px monospace";
    lienzo.fillStyle = "black";

    lienzo.lineWidth = 1;

    //Texto longitud de los catetos y la hipotenusa

    let alturaA1 = a1 + (Number(a) / 2);        //Calculo para que el texto se ajuste a la altura del CatetoA

    lienzo.fillText(a, 200, alturaA1);          //CatetoA  
    console.log(a);

    let amplitudBx = bx - (Number(b) / 2);      //Calculo
    lienzo.fillText(b, amplitudBx, 430);      //CatetoB


    //lienzo.fillText(c, 275, 380);               //Hipotenusa


//----------------------------------------------------------------------------------------------------------------//
    
//Vertex 2 angulo 90º
    if(a){
    lienzo.strokeRect(250,380, 20,20);
    lienzo.fillText("90º", 275, 380);   
    }
     
    
    
    




    //Gradosº del vertex 1
    
    //lienzo.fillText(z + "º", 250, a1);        //Vertex 1 angulo Z
    //lienzo.fillText("Hola, mundo!", 50, 50);        //Vertex 3 Angulo X


}


window.addEventListener("load", comenzar, false);