# Battleship
You will be expected to have a completed, working version of Battleship by the end of your interview.

## Requirements
Create an implementation of the game Battleship.

The game consists of:
* 2 Players
* Each player has a grid on which to place ships
* Each player begins the game with one or more ships in play
* The players take turns choosing a position on the opponent’s grid to attack

The result of an attack must be one of:
* 'Hit’ if the opponent has a ship covering the position
* ‘Miss’ if there is no ship covering the position
* ‘Already Taken’ if the position has previously been attacked
* ‘Sunk’ if all the positions a ship covers have been hit
* ‘Win’ if all the ships on the opponent's grid have been sunk

As is often the case, the given specification is ambiguous in regards to some details about a game of Battleship. Feel free to add constraints as you see fit in order to clarify the specification and limit the problem scope to something appropriate for the scheduled session.

## Evaluation
Your solution will be evaluated on the following:

* Appropriate use of software design principles
* Proficiency with the chosen language and development stack
* Correctness - How do you verify the correctness of the solution?
* Maintainability - How easy is the solution to understand and modify?
* Extensibility - How easily could the solution be adapted to specification changes?
* Performance - What is the algorithmic complexity of the solution?
* Completeness - How much of the specification does the solution implement?

Your code should have some way of demonstrating functionality such as log statements, unit tests, console output, etc.