#Catch the Mouse

This is a single player game where the player’s objective is to catch as many mice out of 20 being released. A score of 15 wins the game.

##Getting started

play the game [here]https://wdi-sg.github.io/wdi-project-1-lainelim/

##Built with
1. Javascript
2. CSS
3. HTML

##Functions breakdown

###start()
This starts and restarts the game once the window has been loaded. Previous scores are cleared.

###getRandomMouse()
This chooses a random mouse.

###mouseAppears
Changes the mouse display from invisible to visible via DOM property classList.
Adds 1 to the total mouse count.

###catchMouse()
Catches the mouse by clicking on the mouse. Adds 1 to the total score.

###mouseDisappears()
If mouse is not caught, mouse disappears.

###scoreUpdate()
Updates the total mice caught in the game.    

###isGameOver
Checks if the total mouse count (mice released) is 20. If yes, checks if the total mice caught is 15 or more to win. If the total mice caught is less than 15, player has the option to replay the game.

###Acknowledgements

artokai’s [Whack-a-thon]http://artokai.net/whack-a-mole-js/
