window.onload= cargar;

function cargar(){
var btncalcular = document.getElementById("btn-modal")
btncalcular.addEventListener("click",clickbtncalcular)

}
function clickbtncalcular(){
    var txtpeso = document.getElementById("txtpeso")
    var peso =txtpeso.value
  

    var txtaltura = document.getElementById("txtaltura")
    var altura =txtaltura.value
  


    var IMC= peso/(altura*altura)
    var Calculo = Math.round(IMC)

   document.getElementById("respuesta").innerHTML= 'Su indice de masa corporal es de : ' +""+""+ Calculo;

    if(Calculo <= 18){
        document.getElementById("rutinas").innerHTML= 'Vemos que su masa corporal se encuentra muy baja, por lo que recomendamos asistir a un nutriologo y seguir nuestras rutinas de aumento de masa'+ "<br>" +  "<br>" +"Rutinas:"+ "<br>" +  "<br>" 
        + "-Sentadillas con peso"
        +  "<br>"+ "-Zancadas y saltos"
        +  "<br>"+ "-Plancha arriba y abajo"
        +  "<br>"+ "-Levantamiento de mancuernas"
        +  "<br>"+ "-Press con barras y pesas"
        +  "<br>"+ "-Extensiones de piernas"
        +  "<br>"+"<br>"+ "Visite nuestra paginas de rutinas"
        ;
    }else if(Calculo >18 && Calculo < 25){
        document.getElementById("rutinas").innerHTML= '¡Felicidades! vemos que su condicion fisica se enuentra en excelente esta'+ "<br>" +  "<br>" +"Rutinas:"+ "<br>" +  "<br>" 
        + "-Sentadillas con peso"
        +  "<br>"+ "-Peso muerto"
        +  "<br>"+ "-Remo con barra"
        +  "<br>"+ "-Battle rope"
        +  "<br>"+ "-Hip thrust"
        +  "<br>"+"<br>"+ "Visite nuestra paginas de rutinas"
        ;;
    }
    else if(Calculo >25 && Calculo < 30){
    document.getElementById("rutinas").innerHTML= 'Vemos que se encuentra en sobrepeso, recomendamos las siguientes rutinas'+ "<br>" +  "<br>" +"Rutinas:"+ "<br>" +  "<br>" 
    + "-Sentadillas con peso"
    +  "<br>"+ "-Calentamiento cardiovascular"
    +  "<br>"+ "-Rotación de tronco"
    +  "<br>"+ "-Extensión de caderas y hombro"
    +  "<br>"+ "-Remo"
    +  "<br>"+ "-Equlibrio"
    +  "<br>"+"<br>"+ "Visite nuestra paginas de rutinas"
    ;
}else if(Calculo >30 && Calculo < 35){
    document.getElementById("rutinas").innerHTML= 'Vemos que se encuentra en obesidad, recomendamos las siguientes rutinas'+ "<br>" +  "<br>" +"Rutinas:"+ "<br>" +  "<br>" 
    + "-Sentadillas con peso"
    +  "<br>"+ "-Ejercicio cardiovascular"
    +  "<br>"+ "-Rotación de tronco"
    +  "<br>"+ "-Sentadilla con extensión de hombro"
    +  "<br>"+ "-Integrado de equilibrio y extensores"
    +  "<br>"+ "-Remo a dos manos"
    +  "<br>"+"<br>"+ "Visite nuestra paginas de rutinas para obtener más ejercicios"
    ;
}else if(Calculo >35){
    document.getElementById("rutinas").innerHTML= 'Vemos que se encuentra en obesidad extrema, recomendamos que asistas a un nutriologo y que realices las siguientes rutinas'+ "<br>" +  "<br>" +"Rutinas:"+ "<br>" +  "<br>" 
    + "-Sentadillas con peso"
    +  "<br>"+ "-Ejercicio cardiovascular"
    +  "<br>"+ "-Rotación de tronco"
    +  "<br>"+ "-Sentadilla con extensión de hombro"
    +  "<br>"+ "-Integrado de equilibrio y extensores"
    +  "<br>"+ "-Remo a dos manos"
    +  "<br>"+"<br>"+ "Visite nuestra paginas de rutinas para obtener más ejercicios"
    ;
}else{
    document.getElementById("respuesta").innerHTML= 'Ingrese una cantidad ';

}


    
}

