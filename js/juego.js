//Seletores
var palabras=['ALURA', 'DESAFIO','ORACLE', 'HTML', 'JAVASCRIPT', 'PHYTON'];
var pincel = document.getElementById("horca");
var pincel = pincel.getContext('2d');
var palabra_secreta = "";
var letras = [];
var palabra_correcta = "";
var letra_elegida = [];
var letras_erradas = [];
var intentos = 8
var numeroDeintentos = 8

var palabra_nueva = localStorage.getItem('palabra_nueva')
if(palabra_nueva != null){
  palabras.push(palabra_nueva)
}



document.getElementById("iniciar-juego").onclick = () => {
  iniciar_juego();
}

document.getElementById("btn-desistir").onclick = () => {
  window.location.replace('index.html')
}

function iniciar_juego(){
  
  // document.getElementById("ocultar-section").style.display = 'none';

  base_horca();
  palabra_random();
  dibujar_rayas();
  
  document.onkeydown = (e) => {
    var letra = e.key.toUpperCase()    
    if(letras_erradas.length <= numeroDeintentos){
      if(!tecla_presionada(e.key) && valida_tecla(e.keyCode)){
        if (palabra_secreta.includes(letra)) {
          agregar_letra_correcta(palabra_secreta.indexOf(letra))
          for (var i = 0; i < palabra_secreta.length; i++){
            if(palabra_secreta[i] === letra){
              dibujar_letra_correcta(i)
              ganador(letra)              
            }  
          }  
        }       
      else {
        if(!tecla_presionada(e.key) && !ganador(letra) ) return
        dibujar_horca(intentos)        
        fin_juego(letra)              
      }
    }
   }   
  }
}

function palabra_random(){
  var aleatorio = palabras[Math.floor(Math.random()*palabras.length)];
  palabra_secreta = aleatorio;
  return palabra_secreta;
}

function tecla_presionada(key){
  if (letras.length < 1 || letras.indexOf(key) < 0) {
    letras.push(key)
    return false    
  }
  else {
    letras.push(key)
    return true
  }
}

function valida_tecla(keyCode){
  if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
}

function agregar_letra_correcta(i){
  palabra_correcta += palabra_secreta[i].toUpperCase();
}

function agregar_letra_errada(letra){
  if (palabra_secreta.indexOf(letra) <= 0){
    intentos -= 1
  }
  dibujar_horca()
}

function ganador(letra){
  letra_elegida.push(letra.toUpperCase());
  if(letra_elegida.length == palabra_secreta.length){
    mostrar_victoria()
  }
}


function fin_juego(letra){
  if(letra_elegida.length < palabra_secreta.length){
    letras_erradas.push(letra);
    
    if(letras_erradas.length > numeroDeintentos){      
      mostrar_derrota()
    }
    else if (letra_elegida.length < palabra_secreta.length){
      agregar_letra_errada(letra)
      dibujar_letra_errada(letra,intentos)
    }
  }
}
