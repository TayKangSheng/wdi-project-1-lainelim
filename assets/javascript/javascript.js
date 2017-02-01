window.addEventListener('DOMContentLoaded', function () {
  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  var sint = setInterval(mouseAppears, 2000)
  var points = 0
  var mousecount = 0
  var mouses = document.querySelectorAll('.mouse')
  var mousehole = document.querySelectorAll('.mousehole')
  var pows = document.querySelectorAll('.pow')

  alert('Catch the mice by clicking on them as they appear!')
  sint

  function restart () {
    points = 0
    mousecount = 0
    scoreboard = document.querySelector('.scoreboard')
    scoreboard.textContent = 'Mice Caught: 0'
    mouses.forEach(function (mouse) {
      mouse.classList.remove('visible')
      mouse.classList.add('hidden')
    })
  }

  function mouseAppears () {
    var i = Math.round(Math.random() * 11)
    var mouse = mouses[i]
    mouse.classList.remove('hidden')
    mouse.classList.add('visible')
    mousecount++
    console.log(mousecount)
    mouse.onclick = function () {
      var pow = pows[i]
      mouse.classList.remove('visible')
      mouse.classList.add('hidden')
      pow.classList.remove('hidden')
      pow.classList.add('visible')
      points++
      updateScore()
      setTimeout(function () {
        pow.classList.remove('visible')
        pow.classList.add('hidden')
      }, 500)
    }
    setTimeout(function () {
      mouse.classList.remove('visible')
      mouse.classList.add('hidden')
    }, getRandomInt(500, 3000))
    isGameOver()
  }

  function updateScore () {
    scoreboard = document.querySelector('.scoreboard')
    scoreboard.textContent = 'Mice Caught: ' + points
  }

  function isGameOver () {
    if (mousecount === 20) {
      setTimeout(function () {
        if (points >= 12) {
          alert("You're a pro!")
          clearInterval(sint)
        } else {
          if (confirm('Would you like to try again?')) {
            restart()
          } else { clearInterval(sint) }
        }
      }, 3000)
    }
  }

  var btn = document.querySelector('button')
  btn.addEventListener('click', restart)
})
