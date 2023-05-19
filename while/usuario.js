//Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. 
//Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. 
//Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.

const usuarioM = "luis";
const contraseñaM = 1234;

let contador = 0;

while(contador < 3){
    let usuario = prompt("Ingresa el usuario");
    let contraseña = prompt("Ingresa la contraseña");

    //alert(usuario + " " + contraseña)

    if (usuario == usuarioM){
        if (contraseña == contraseñaM){
            alert("Bienvenido");
            contador = 3;
        }
    } else {
        contador = contador + 1;

            if (contador == 3){
                alert("error exceso de intentos");
            }
    }
}