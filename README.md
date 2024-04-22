# Random Recipe Generator

## Introduction
The Random Recipe Generator is a simple JavaScript program that generates random meal suggestions by combining protein options, side dishes, and extra items.

## Features
- Generates random meal suggestions.
- Provides user interaction for generating multiple suggestions.
- Validates user input for better user experience.

## Usage
1. **Installation**: No installation is required. Simply run the JavaScript file in a Node.js environment.

2. **Running the Program**: Execute the program, and it will prompt the user for their name and then generate a random meal suggestion. The user can choose to see another suggestion or exit the program.

3. **Generated Output**: Each meal suggestion includes a randomly selected protein, side dish, and extra item.

## Code Structure
- **randomFoods Object**: Contains methods and data for generating random meal suggestions.
  - **protein**: Array containing protein options.
  - **side**: Array containing side dish options.
  - **extra**: Array containing extra item options.
  - **start()**: Entry point of the program. Prompts the user for their name and controls the flow of generating meal suggestions based on user input.
  - **randomMeal()**: Generates a random meal combination by selecting one item from each category (protein, side, extra).
  - **randomMessage(name)**: Generates a message string incorporating the user's name and the randomly generated meal suggestion.

## Dependencies
- The program uses the `prompt-sync` library for synchronous user input handling.

## How to Run
1. Ensure you have Node.js installed on your system.
2. Save the provided code in a JavaScript file (e.g., `random_recipe_generator.js`).
3. Open a terminal or command prompt.
4. Navigate to the directory containing the JavaScript file.
5. Run the program using the command `node random_recipe_generator.js`.
6. Follow the prompts to interact with the program and receive random meal suggestions.

## Additional Notes
- The program validates user input to ensure it conforms to expected options.
<<<<<<< HEAD
- If the user enters an invalid option multiple times, the program will exit for better user experience.
=======
- If the user enters an invalid option multiple times, the program will exit for better user experience.
=======
<<<<<<< HEAD
- If the user enters an invalid option multiple times, the program will exit for better user experience.
=======
- If the user enters an invalid option multiple times, the program will exit for better user experience.