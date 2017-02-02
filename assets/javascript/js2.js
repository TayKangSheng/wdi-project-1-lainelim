var game = {

  mouses: document.querySelectorAll('.mouse'),
  pows: document.querySelectorAll('.pow'),
  points: 0,
  count: 0,
  scoreboard: document.querySelector('.scoreboard'),
  gameEngine: null,

  getRandomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  },

  start: function () {
    this.points = 0
    this.count = 0
    this.scoreboard.textContent = 'Mice Caught: 0'
    this.mouses.forEach(function (mouse) {
      mouse.classList.remove('visible')
      mouse.classList.add('hidden')
    })
    document.querySelector('button').style.display = 'none'
    this.gameEngine = setInterval(this.mouseAppears.bind(game), 2000)
  },

  getRandomMouse: function () {
    this.i = Math.round(Math.random() * 11)
    var mouse = this.mouses[this.i]
    return mouse
  },

  mouseAppears: function () {
    this.mouse = this.getRandomMouse()
    this.mouse.classList.remove('hidden')
    this.mouse.classList.add('visible')
    console.log(++this.count)
    this.catchMouse()
    setTimeout(this.mouseDisappears.bind(game), this.getRandomInt(500, 2000))
  },

  catchMouse: function () {
    this.mouse.onclick = function () {
      this.pow = this.pows[this.i]
      this.mouse.classList.remove('visible')
      this.mouse.classList.add('hidden')
      this.pow.classList.remove('hidden')
      this.pow.classList.add('visible')
      this.points++
      this.updateScore()
      setTimeout(function () {
        this.pow.classList.remove('visible')
        this.pow.classList.add('hidden')
      }.bind(game), 500)
    }.bind(game)
  },

  mouseDisappears: function () {
    this.mouse.classList.remove('visible')
    this.mouse.classList.add('hidden')
    setTimeout(this.isGameOver(), 3000)
  },

  updateScore: function () {
    this.scoreboard.textContent = 'Mice Caught: ' + this.points
  },

  isGameOver: function () {
    if (this.count === 20) {
      if (this.points >= 15) {
        alert("You're a pro!")
        clearInterval(this.gameEngine)
        document.querySelector('button').style.display = 'inline-block'
      } else {
        if (confirm('Would you like to try again?')) {
          clearInterval(this.gameEngine)
          this.start()
        } else {
          clearInterval(this.gameEngine)
          document.querySelector('button').style.display = 'inline-block'
        }
      }
    }
  }
}

window.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('button')
  btn.addEventListener('click', game.start.bind(game))
  alert('Catch the mice by clicking on them as they appear!')
  btn.style.display = 'none'
  game.start()
})
