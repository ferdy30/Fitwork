window.onload= cargar;

function cargar(){
var btncalcular = document.getElementById("btncalcular")
btncalcular.addEventListener("click",clickbtncalcular)

}
function clickbtncalcular(){
    var txtpeso = document.getElementById("txtpeso")
    var peso =txtpeso.value
  

    var txtaltura = document.getElementById("txtaltura")
    var altura =txtaltura.value
  


    var IMC= peso/(altura*altura)
    alert("su imc es :" + Math.round(IMC))
    
    
    
}
