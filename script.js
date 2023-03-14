//Para entrar los catetos y que de la hipotenusa    OPERACIONES

//alert("Dime los dos catetos:");
//const a = prompt()
//const b = prompt()
//let c = Math.sqrt(a * a + b * b)
//alert("La hipotenusa es" + c)
let a1 = 50;
let bx = 800;
let by = 400;

//Calculadora INPUT

function calcular(){
    let a= document.getElementById("cateto1").value;
    let b= document.getElementById("cateto2").value;

    document.getElementById("ca").innerHTML = a;
    document.getElementById("cb").innerHTML = b;
    
    let c = Math.sqrt(a * a + b * b)        //Calculamos hipotenusa
    document.getElementById("ch").innerHTML = c.toFixed(3);


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

    lienzo.moveTo(250, a1);           //Cordenadas donde comienza a dibujar                   Primer vertice
    lienzo.lineTo(250,400);         //Desde cordenadas donde esta a nuevas cordenadas       Segundo vertice


    //lienzo.moveTo(50,50);           
    lienzo.lineTo(bx,by);         //Tercer vertice




    lienzo.closePath();

    lienzo.lineWidth = 3;
    lienzo.stroke();


    //Texto dentro del lienzo

    lienzo.font = "18px monospace";
    lienzo.fillStyle = "black";

    lienzo.lineWidth = 1;
    lienzo.strokeRect(250,380, 20,20);
    lienzo.fillText("90º", 275, 380);        //Vertex 1 angulo 90º
    //lienzo.fillText("Hola, mundo!", 50, 50);        //Vertex 2 angulo Z
    //lienzo.fillText("Hola, mundo!", 50, 50);        //Vertex 3 Angulo X


}

function angulos(){

}





window.addEventListener("load", comenzar, false);