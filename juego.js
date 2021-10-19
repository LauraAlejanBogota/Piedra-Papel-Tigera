//DEclarar variables
var opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
var opciones = [0, 1, 2, 3, 4];
var eleccionMaquina;

//Devolver un valor ramdom de maquina
function aleatorio(minimo, maximo){
    var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
    return numero;
}

//obtener respuesta de usuario
function usuario(eleccionUsuario){
    //comvertir opcion del usuario en int
    eleccionUsuario = parseInt(eleccionUsuario);
    console.log('eleccion del usuario '+eleccionUsuario);
    //opcion aleatoria de la maquina
    eleccionMaquina = aleatorio(0,4);
    console.log('eleccion del maquina '+ eleccionMaquina);

    //Comparar la eleccion del usuario cuando escogio piedra
    if(eleccionUsuario == 0){//el usuario eligio piedra 
        if(opciones[eleccionMaquina] == 1){//si la maquina eligio papel 
            document.getElementById('efecto').innerHTML ='<h1 class="cont">¡Perdiste!</h1> <h3>La maquina eligio papel y tu piedra.</h3>';
        }else{
            if(opciones[eleccionMaquina] == 2){
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio tijera y tu piedra.</h3>';
            }else{
                if(opciones[eleccionMaquina] == 0){
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron piedra.</h3>';
                }
                else{
                    if (opciones[eleccionMaquina] == 3) {
                        document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio lagarto y tu piedra.</h3>';
                    }
                    else{
                        if (opciones[eleccionMaquina] == 4) {
                            document.getElementById('efecto').innerHTML ='<h1 class="cont">¡Perdiste!</h1> <h3>La maquina eligio spock y tu piedra.</h3>';
                        }
                    }
                }
            }
        } 
    }

    //Comparar la eleccion del usuario cuando escogio papel
    if(eleccionUsuario == 1){//el usuario eligio papel 
        if(opciones[eleccionMaquina] == 2){
            document.getElementById('efecto').innerHTML ='<h1 class="cont">¡Perdiste!</h1> <h3>La maquina eligio tijera y tu papel.</h3>';
        }else{
            if(opciones[eleccionMaquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio piedra y tu papel.</h3>';
                
            }else{
                if(opciones[eleccionMaquina] == 1){
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron papel.</h3>'; 
                }
                else{
                    if (opciones[eleccionMaquina] == 3) {
                        document.getElementById('efecto').innerHTML ='<h1 class="cont">¡Perdiste!</h1> <h3>La maquina eligio lagarto y tu papel.</h3>';
                    }
                    else{
                        if (opciones[eleccionMaquina] == 4) {
                            document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio spock y tu papel.</h3>';
                        }
                    }
                }
            }
        }
    }

    //Comparar la eleccion del usuario cuando escogio tijera
    if(eleccionUsuario == 2) {//el usuario eligio tijera 
        if(opciones[eleccionMaquina] == 1){
            document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio papel y tu tijera.</h3>';
        
        }else{
            if(opciones[eleccionMaquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1 class="cont">¡Perdiste!</h1> <h3>La maquina eligio piedra y tu tijera.</h3>'; 
            }else{
                if(opciones[eleccionMaquina] == 2) {
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron tijera.</h3>';
                }
                else{
                    if (opciones[eleccionMaquina] == 3) {
                        document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio lagarto y tu tijera.</h3>';
                    }
                    else{
                        if (opciones[eleccionMaquina] == 4) {
                            document.getElementById('efecto').innerHTML ='<h1 class="cont">¡Perdiste!</h1> <h3>La maquina eligio spock y tu tijera.</h3>';
                        }
                    }
                }
            }
        }
    }

    //Comparar la eleccion del usuario cuando escogio lagarto
    if(eleccionUsuario == 3) {//el usuario eligio lagarto 
        if(opciones[eleccionMaquina] == 1){
            document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio papel y tu lagarto.</h3>';
        
        }else{
            if(opciones[eleccionMaquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1 class="cont">¡Perdiste!</h1> <h3>La maquina eligio piedra y tu lagarto.</h3>'; 
            }else{
                if(opciones[eleccionMaquina] == 3) {
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron lagarto.</h3>';
                }
                else{
                    if (opciones[eleccionMaquina] == 2) {
                        document.getElementById('efecto').innerHTML ='<h1 class="cont">¡Perdiste!</h1> <h3>La maquina eligio tijera y tu lagarto.</h3>';
                    }
                    else{
                        if (opciones[eleccionMaquina] == 4) {
                            document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio spock y tu lagarto.</h3>';
                        }
                    }
                }
            }
        }
    }

    //Comparar la eleccion del usuario cuando escogio spock
    if(eleccionUsuario == 4) {//el usuario eligio spock 
        if(opciones[eleccionMaquina] == 1){
            document.getElementById('efecto').innerHTML ='<h1 class="cont">¡Perdiste!</h1> <h3>La maquina eligio papel y tu spock.</h3>';
        
        }else{
            if(opciones[eleccionMaquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio piedra y tu spock.</h3>'; 
            }else{
                if(opciones[eleccionMaquina] == 2) {
                    document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio tijera y tu spock.</h3>'; 
                }
                else{
                    if (opciones[eleccionMaquina] == 3) {
                        document.getElementById('efecto').innerHTML ='<h1 class="cont">¡Perdiste!</h1> <h3>La maquina eligio lagarto y tu spock.</h3>';
                    }
                    else{
                        if (opciones[eleccionMaquina] == 4) {
                            document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron spock.</h3>';
                        }
                    }
                }
            }
        }
    }

    //Contador que indique al usuario que perdio

    //contar la palabra perdiste 
    //o crear una funcion cuando pierda que se alimente
}

