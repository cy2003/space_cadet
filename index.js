$(document).ready(function(){
  let space_cadet = new Board()
  space_cadet.render()
  let music = document.createElement('audio')
  music.setAttribute('src', 'audio/Galactic Empire - The Imperial March - from YouTube (1).mp3')
  //$('#start').click(function() {
  music.play()
  //}
  let dog = new Dog()
  dog.render()
  dog.moveDog()
  let rock = new Rock()
  rock.render()
  rock.animateRock()
})

// function start() {
//   document.addEventListener('keydown', moveDog)
  //
  // START.style.display = 'none'
