document.getElementById("boton").addEventListener("click",function(){
    let nom = document.getElementById("nombre").value
    let tel = document.getElementById("numero").value

    document.getElementById("salida").innerHTML= "Se hara llegar en breves momentos el codigo de cangeo al siguiente correo " + tel + " y la clave de seg al ID " + nom + " para poder cangear el juego. Si no le llegar el correo de confirmacion porfavor volver a ingresar los datos."
})