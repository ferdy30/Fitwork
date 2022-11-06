/*Valiadacion de nombre*/
function nombrev(valor){
    var exp = /^[a-zA-Z ]{4,40}$/;
    return exp.test(valor);
}


function validarNombre(){
    nombre = document.getElementById('txtnombre').value;
    if(nombrev(nombre)){
        document.getElementById('txtnombre').style.borderColor = "green";
        document.querySelector('#grupo__nombre .formulario__input-error').classList.remove('formulario__input-error-activo');
    }
    else{
        document.getElementById('txtnombre').style.borderColor = "red";
        document.querySelector('#grupo__nombre .formulario__input-error').classList.add('formulario__input-error-activo');
    }

}

/*validacion de correo*/
function correov(valor){
    var exp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return exp.test(valor);
}

function validarCorreo(){
    correo=document.getElementById('txtcorreo').value;
    if(correov(correo)){
        document.getElementById('txtcorreo').style.borderColor = "green";
        document.querySelector('#grupo__correo .formulario__input-error').classList.remove('formulario__input-error-activo');
    }else{
        document.getElementById('txtcorreo').style.borderColor = "red";
        document.querySelector('#grupo__correo .formulario__input-error').classList.add('formulario__input-error-activo');
    }
}


/*Validacion de Contraseña*/
function contrav(valor){
    var exp =/^[a-zA-Z0-9\_\-]{4,16}$/;
    return exp.test(valor);
}

function validarContra(){
    contraseña=document.getElementById('txtcontraseña').value;
    if(correov(correo)){
        document.getElementById('txtcontraseña').style.borderColor = "green";
        document.querySelector('#grupo__contra .formulario__input-error').classList.remove('formulario__input-error-activo');
    }else{
        document.getElementById('txtcontraseña').style.borderColor = "red";
        document.querySelector('#grupo__contra .formulario__input-error').classList.add('formulario__input-error-activo');
    }
}

function init(){
    nombre = document.getElementById('txtnombre');
    nombre.onchange = validarNombre;

    correo=document.getElementById('txtcorreo');
    correo.onchange=validarCorreo;
    
    contraseña=document.getElementById('txtcontraseña');
    contraseña.onchange=validarContra;
}

window.onload = init;