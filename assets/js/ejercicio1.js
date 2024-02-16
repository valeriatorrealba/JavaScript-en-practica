let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    limpiarPagina();

    let nombre = document.getElementById("nombre").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;

    botton = validar(nombre,asunto,mensaje);

    if (botton == true){
        exito();
    }

})

function limpiarPagina(){
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
}

function exito() {
    document.querySelector(".resultado").innerHTML= "Mensaje enviado con éxito";
}

function validar(nombre,asunto,mensaje) {
    let validacion = true;
    let validacionNombre = /[a-zA-Z]/gim;

    if (validacionNombre.test(nombre) == false){
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido.";
        validacion = false;
    }

    let validacionAsunto = /[a-zA-Z]/gim;
    if (validacionAsunto.test(asunto) == false){
        document.querySelector(".errorAsunto").innerHTML = "El Asunto es requerido";
        validacion = false;
    }

    let validacionMensaje = /[a-zA-Z]/gim;
    if (validacionMensaje.test(mensaje) == false ) {
        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido."
        validacion = false;
    }
    return validacion;

}
