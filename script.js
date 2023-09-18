const play = document.getElementById('play')
const display = document.getElementById('display')

play.addEventListener('click', ()=>{
  play.style.animation = 'zoom 3s ease-out'
  display.classList.add('disipate');
  setTimeout(()=>{
    play.style.display = 'none'
    display.style.display = 'none'
  },3000)
})





// Obtén todos los elementos <p> con el atributo data-content
const elementosConDataContent = document.querySelectorAll('[data-content]');

elementosConDataContent.forEach((elemento) => {
  // Obtiene el contenido del atributo data-content
  const contenido = elemento.getAttribute('data-content');
  console.log('func');
  
  // Inserta el contenido dentro del párrafo
  elemento.textContent = contenido;
});

