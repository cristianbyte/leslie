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

// CARDS ##########

const card1 = document.getElementById('card1')
const card2 = document.getElementById('card2')
const card3 = document.getElementById('card3')

card1.addEventListener('click', ()=>{
  card1.style.zIndex = '100'
  card1.style.animation = 'zoomflip 1s ease-in'
  setTimeout(()=>{
    card1.style.transform = 'scale(2) translateX(calc(50% + 2rem))'
  },1000)
})
card2.addEventListener('click', ()=>{
  card2.style.zIndex = '100'
  card2.style.animation = 'zoomflip2 1s ease-in'
  setTimeout(()=>{
    card2.style.transform = 'scale(2)'
  },1000)
})
card3.addEventListener('click', ()=>{
  card3.style.zIndex = '100'
  card3.style.animation = 'zoomflip3 1s ease-in'
  setTimeout(()=>{
    card3.style.transform = 'scale(2) translateX(calc(-50% - 2rem))'
  },1000)
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

