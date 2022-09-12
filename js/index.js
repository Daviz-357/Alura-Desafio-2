var btn_InciarJuego = document.querySelector('.btn-iniciar')
var btn_AgregarPalabra = document.querySelector('.btn-palabra')

btn_InciarJuego.addEventListener('click', function(){
  window.location.replace('juego.html')
})

btn_AgregarPalabra.addEventListener('click', function(){
  window.location.replace('agregar-palabra.html')
})