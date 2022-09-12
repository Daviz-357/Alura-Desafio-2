var btn_Guardar = document.querySelector('.btn-guardar')
var btn_Cancelar = document.querySelector('.btn-cancelar')
var texto = document.querySelector(".texto")
var info = document.querySelector("#info-word")





texto.addEventListener('change', function(){
  var palabra_nueva = texto.value
  btn_Guardar.addEventListener('click', function(){
    if(palabra_nueva.length <=8){
      localStorage.setItem('palabra_nueva', palabra_nueva)
      window.location.replace("juego.html")
      alert("Palabra Agregada")     
    }else{
      info.removeAttribute('#info-word')
      info.setAttribute('id', 'attention')
    }
  })
})

btn_Cancelar.addEventListener('click', function(){
  window.location.replace('index.html')
})