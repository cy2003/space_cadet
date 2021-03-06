class Board{
  constructor(){
    this.width = 1100
    this.height = 650
  }

  render(){
    let $board = $('#board')
    $board.html()
  }


  startGame(){
    let music = document.createElement('audio')
    music.setAttribute('src', 'audio/Earth Wind and Fire- Shining Star - from YouTube.mp3')
    this.rock = new Rock()
    document.addEventListener("click",
    () => {
      music.play()
      $("#start").remove()
      this.rock.render()
      this.rock.moveRock()
    })
  }

  checkCollision(){
  var collide = $('#dog').collision('.rock')
  var collide1 = $('#dog').collision('.rock_1')
  var collide2 = $('#dog').collision('.rock_2')
  var collide3 = $('#dog').collision('.rock_3')
  var collide4 = $('#dog').collision('.rock_4')
  var collide5 = $('#dog').collision('.rock_5')
    if (!!collide.length || !!collide1.length || !!collide2.length || !!collide3.length || !!collide4.length || !!collide5.length) { // true
      alert('YOU LOSE! GAME OVER')
      alert = function(){}
      let loserMusic = document.createElement('audio')
      loserMusic.setAttribute('src', 'audio/Lost-life-sound-effect.mp3')
      loserMusic.play()
      //this.endGame()
    }
  }

  collided(){
    let boardItself = this
    this.checkCollisionInterval = setInterval(function() {
      boardItself.checkCollision()}, 100)
  }

  winGame() {
    if ($('#dog')[0].style['left'] == '950px') { // true
      alert('YAY! YOU WIN!!!')
      alert = function(){}
      let winMusic = document.createElement('audio')
      winMusic.setAttribute('src', 'audio/Level-up-sound-effect.mp3')
      winMusic.play()
      //this.endGame()
    }
  }

  win() {
    var boardItself = this
    //this.checkForWinInterval = setInterval(function(){boardItself.winGame()}, 100)
    setInterval(function(){boardItself.winGame()}, 100)
  }

  // endGame() {
  //   this.rock.stopRock()
  // }


}
