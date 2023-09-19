const jsConfetti = new JSConfetti()
const play = document.getElementById('play')
const display = document.getElementById('display')
const cards = document.getElementById('cards')
let observer = [false,false,false]

const snd_1 = new Audio("./assets/tada.mp3")
const snd_2 = new Audio("./assets/toun.wav")
const snd_3 = new Audio("./assets/toun2.wav")


play.addEventListener('click', ()=>{
  play.style.animation = 'zoom 3s ease-out'
  display.classList.add('disipate');
  snd_2.play()
  setTimeout(()=>{
    play.style.display = 'none'
    display.style.display = 'none'
    cards.style.display = 'flex '
  },3000)
})

// CARDS ##########

const cardi = document.getElementById('card1')

document.body.addEventListener('dblclick', ()=> {
  if (cardDisplay[0]) {
    card[cardDisplay[1]].style.animation = `zoomflip${(cardDisplay[1] + 1)} 1s ease-in reverse`
    setTimeout(()=>{
      card[cardDisplay[1]].style.transform = 'unset'
      card[cardDisplay[1]].style.animation = 'unset'
      card[cardDisplay[1]].style.zIndex = '10'
      cardDisplay = false
    },800)
    console.log(observer);
    setTimeout(()=>{
      if(observer[0] && observer[1] && observer[2]){
        snd_1.play()
        jsConfetti.addConfetti()
        console.log('bum');
      }
    },1000)
  }
});

let card = [document.getElementById('card1'),
            document.getElementById('card2'),
            document.getElementById('card3')]

let cardDisplay = [false , false]

card[0].addEventListener('click', ()=>{
  if(cardDisplay[0]){
    return
  }
  snd_3.play()
  card[0].style.zIndex = '100'
  card[0].style.animation = 'zoomflip 1s ease-in '
  setTimeout(()=>{
    card[0].style.transform = 'scale(2) translateX(calc(50% + 2rem))'
    card[0].style.animation = 'unset'
    cardDisplay = [true,0]
    observer[0]=true
  },1000)
})
card[1].addEventListener('click', ()=>{
  if(cardDisplay[0]){
    return
  }
  snd_3.play()
  card[1].style.zIndex = '100'
  card[1].style.animation = 'zoomflip2 1s ease-in'
  setTimeout(()=>{
    card[1].style.transform = 'scale(2)'
    cardDisplay = [true,1]
    observer[1]=true
  },1000)
})
card[2].addEventListener('click', ()=>{
  if(cardDisplay[0]){
    return
  }
  snd_3.play()
  card[2].style.zIndex = '100'
  card[2].style.animation = 'zoomflip3 1s ease-in'
  setTimeout(()=>{
    card[2].style.transform = 'scale(2) translateX(calc(-50% - 2rem))'
    cardDisplay = [true,2]
    observer[2]=true
  },1000)
})



// Obtén todos los elementos <p> con el atributo data-content
const elementosConDataContent = document.querySelectorAll('[data-content]');

elementosConDataContent.forEach((elemento) => {
  // Obtiene el contenido del atributo data-content
  const contenido = elemento.getAttribute('data-content');
  
  // Inserta el contenido dentro del párrafo
  elemento.textContent = contenido;
});

