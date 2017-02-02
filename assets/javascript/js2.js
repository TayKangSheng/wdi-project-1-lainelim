var game = {

  mouses: document.querySelectorAll('.mouse'),
  pows: document.querySelectorAll('.pow'),
  points: 0,
  count: 0,

  getRandomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  },

  start: function () {
    var points = 0
    var count = 0
    scoreboard = document.querySelector('.scoreboard')
    scoreboard.textContent = 'Mice Caught: 0'
    game.mouses.forEach(function (mouse) {
      mouse.classList.remove('visible')
      mouse.classList.add('hidden')
    })
  },

  getRandomMouse: function () {
    this.i = Math.round(Math.random() * 11)
    var mouse = this.mouses[this.i]
    return mouse
  },

  mouseAppears: function () {
    // var i = Math.round(Math.random() * 11)
    // var mouse = game.mouses[i]
    this.mouse = this.getRandomMouse()
    console.log(this.mouse) // set this.mouse = to a random mouse
    this.mouse.classList.remove('hidden')
    this.mouse.classList.add('visible')
    game.count++
    setTimeout(this.mouseDisappears.bind(game), this.getRandomInt(500,2000))

      // if(game.catchMouse()){
      //   game.points++
      //   game.updateScore()
      // }
      // else{
      //
      // }
      // game.isGameOver()
  },

  catchMouse: function () {
    this.mouse.onclick = function () {
      this.pow = this.pows[this.i]
      this.mouse.classList.remove('visible')
      this.mouse.classList.add('hidden')
      this.pow.classList.remove('hidden')
      this.pow.classList.add('visible')
      this.points++
      setTimeout(function () {
        this.pow.classList.remove('visible')
        this.pow.classList.add('hidden')
      }.bind(game), 500)
    }.bind(game)
  },

  mouseDisappears: function () {
    this.mouse.classList.remove('visible')
    this.mouse.classList.add('hidden')
  },

  updateScore: function () {
    scoreboard = document.querySelector('.scoreboard')
    scoreboard.textContent = 'Mice Caught: ' + this.points
  },

  isGameOver: function () {
    if (mousecount === 20) {
      setTimeout(function () {
        if (points >= 12) {
          alert("You're a pro!")
          clearInterval(this.start())
        } else {
          if (confirm('Would you like to try again?')) {
            this.start()
          } else {
            clearInterval(this.start())
          }
        }
      }, 3000)
    }
  }

}

window.addEventListener('DOMContentLoaded', function () {
  // alert('Catch the mice by clicking on them as they appear!')
  // game.start()
  setInterval(game.mouseAppears.bind(game), game.getRandomInt(500, 2000))
  // game.mouseAppears()
  // game.catchMouse()

  // setTimeout(game.mouseDisappears.bind(game), game.getRandomInt(500,2000))

})
