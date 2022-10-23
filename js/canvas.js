function base_horca() {
  pincel.lineWidth=6
  pincel.lineCap="round"
  // pincel.lineJoin="round"
  pincel.fillStyle= "#F3F5FC"
  pincel.strokeStyle = "#0A3871"
  pincel.fillRect(0,0,1200,800)
  pincel.beginPath();
  pincel.moveTo(450,500)
  pincel.lineTo(780,500)
  pincel.stroke()
  pincel.closePath()
  }

function dibujar_rayas(){
  pincel.lineWidth=6
  pincel.lineCap="round"
  // pincel.lineJoin="round"
  pincel.strokeStyle = "#0A3871"
  pincel.beginPath()
  let ancho=600/palabra_secreta.length
  for (let i=0;i<palabra_secreta.length;i++){
    pincel.moveTo(320+(ancho*i),640)
    pincel.lineTo(360+(ancho*i),640)
  }
  pincel.stroke()
  pincel.closePath()
    
  }

function dibujar_letra_correcta(index){
    pincel.font = 'bold 50px Inter';
    pincel.lineWidth=6
    pincel.lineCap="round"
    pincel.lineJoin="round"
    pincel.fillStyle= "#0A3871"
  
  var largo = 600/palabra_secreta.length 
  pincel.fillText(palabra_secreta[index],320+(largo*index),635);
  pincel.stroke()
}

function dibujar_letra_errada(letra, intentos) {
  pincel.lineWidth=6
  pincel.font = 'bold 30px Inter';
  pincel.lineCap="round"
  pincel.lineJoin="round"
  pincel.fillStyle="#0A3871"
  pincel.fillText(letra,380+(40*(10-intentos)),680,40)
}



function dibujar_horca(intentos) {  
  pincel.lineWidth = "6";        
    pincel.fillStyle = "#0A3871"
    pincel.lineCap = "round"
    //poste  
  if (intentos === 8){
    pincel.moveTo(550,500)
    pincel.lineTo(550,148)
    pincel.stroke()
    pincel.closePath()
  }
    //techo
  if (intentos === 7){
    pincel.moveTo(550,148)
    pincel.lineTo(770,148)
    pincel.stroke()
    pincel.closePath()
  }
    //cuerda
  if (intentos === 6){
    pincel.moveTo(770,148)
    pincel.lineTo(770,200)
    pincel.stroke()
    pincel.closePath()
  }
    //cabeza
  if (intentos === 5){
    pincel.moveTo(800,230)    
    pincel.arc(770, 230, 30, 0, Math.PI *2);
    pincel.stroke()
    pincel.closePath()
  } 
    //tronco
  if (intentos === 4){  
    pincel.moveTo(770,260)
    pincel.lineTo(770,350)  
    pincel.stroke()
    pincel.closePath()
  } 
    //brazo_left
  if (intentos === 3){  
    pincel.moveTo(770,300);
    pincel.lineTo(700,250); 
    pincel.stroke()
    pincel.closePath()
  }
    //brazo_right
  if (intentos === 2){  
    pincel.moveTo(770,300);
    pincel.lineTo(840,250);
    pincel.stroke()
    pincel.closePath()
  }
    //pierna_left
  if (intentos === 1){  
    pincel.moveTo(770,350);
    pincel.lineTo(730,420);
    pincel.stroke()
    pincel.closePath()
  }
    //pierna_right
  if (intentos === 0){  
    pincel.moveTo(770,350);
    pincel.lineTo(810,420);
    pincel.stroke()
    pincel.closePath()
  }  
    
}
  function mostrar_victoria(){    
    pincel.font = 'bold 42px Inter';
    pincel.lineWidth=6
    pincel.lineCap="round"
    pincel.lineJoin="round"
    pincel.fillStyle="green"
    pincel.fillText("Ganaste,",950,320)
    pincel.fillText("Felicidades!",930,370)
    setTimeout( recarregar , 1000)
  }

  function mostrar_derrota(){    
    pincel.font = ' bold 42px Inter';
    pincel.lineWidth=6
    pincel.lineCap="round"
    pincel.lineJoin="round"
    pincel.fillStyle="red"
    pincel.fillText("Fin del juego :(",930,320)        
    setTimeout( recarregar , 1000)
    
  } 

  function desenharForca(pontos) {
    pincel.lineWidth=8
    pincel.lineCap="round"
    pincel.lineJoin="round"
    pincel.strokeStyle = "#0A3871"
    if(pontos===8){
    //poste lateral
    pincel.moveTo(700,500)
    pincel.lineTo(700,100)
    }
    if(pontos===7){//teto 
    pincel.moveTo(850,100)
    pincel.lineTo(700,100)
    }
    if(pontos===6){//corda
    pincel.moveTo(850,100)
    pincel.lineTo(850,171)
    }
    if(pontos===5){//para cara
    pincel.moveTo(900,230)
    pincel.arc(850,230,50,0,Math.PI*2)
    }
    if(pontos===4){//para corpo
    pincel.moveTo(850,389)
    pincel.lineTo(850,289)
    }
    if(pontos===3){//para perna esquerda
    pincel.moveTo(850,389)
    pincel.lineTo(800,450)
    }
    if(pontos===2){//para perna direita
    pincel.moveTo(850,389)
    pincel.lineTo(890,450)
    }
    if(pontos===1){//para mão izquerda
    pincel.moveTo(850,330)
    pincel.lineTo(800,389)
    }
    if(pontos===0){//para mão direita
    pincel.moveTo(850,330)
    pincel.lineTo(890,389)
    }
    pincel.stroke()
    pincel.closePath()
  }
  
  function recarregar(){
    location.reload(); 
  }
