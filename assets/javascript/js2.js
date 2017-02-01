function game(){

  var mouses = document.querySelectorAll('.mouse')
  var pows = document.querySelectorAll('.pow')

  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

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
function start () {
  setInterval(function(){
  var i = Math.round(Math.random() * 11)
  var mouse = mouses[i]
  mouse.classList.remove('hidden')
  mouse.classList.add('visible')
  mousecount++
  game.addClickHandler()
  setTimeout(function () {
    mouse.classList.remove('visible')
    mouse.classList.add('hidden')
  }, getRandomInt(500, 3000))
  game.isGameOver()
},2000)
}

function addClickHandler () {
  mouse.onclick = function () {
    var pow = pows[i]
    mouse.classList.remove('visible')
    mouse.classList.add('hidden')
    pow.classList.remove('hidden')
    pow.classList.add('visible')
    points++
    game.updateScore()
    setTimeout(function () {
      pow.classList.remove('visible')
      pow.classList.add('hidden')
    }, 500)
  }
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
        clearInterval(game.start())
      } else {
        if (confirm('Would you like to try again?')) {
          restart()
        } else { clearInterval(game.start()) }
      }
    }, 3000)
  }
}
return{
start: start,
restart: restart,
isGameOver: isGameOver,
updateScore: updateScore,
addClickHandler: addClickHandler
}
}

window.addEventListener('DOMContentLoaded', function () {
  alert('Catch the mice by clicking on them as they appear!')
  game.start()
  var btn = document.querySelector('button')
  btn.addEventListener('click', game.restart())
})
