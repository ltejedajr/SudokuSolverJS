# Sudoku Solver Project

## Overview

This JavaScript-based Sudoku solver project employs functions, arrays, and looping structures to efficiently solve 9x9 Sudoku puzzles. The solver follows a logical approach to deduce and fill in missing values within the puzzle grid.

## Features

1. **Sudoku Solver Function:**
   - Utilizes a logical algorithm to deduce and fill in missing values in a Sudoku puzzle.
   - Encapsulated within a function for modularity and ease of use.

```javascript
// Example Usage
const { solveSudoku } = require('./solver');
let board = [
    "--5--9-7-",
    // ... (complete the board as needed)
];

let solution = solveSudoku(board);
console.log(solution);
```

2. **Board Representation:**
   - The puzzle state is represented using a 9x9 grid in an array named `board`.
   - Each element in the array corresponds to a cell in the Sudoku grid.

```javascript
let board = [
    "--5--9-7-",
    "27----8--",
    // ... (complete the board as needed)
];
```

3. **Column Interpretation:**
   - Facilitates easy interpretation of values in a specific column or row of the Sudoku grid.
   - Enables users to extract and analyze column or row data for validation or display purposes.

```javascript
// Example
// Column 2 has a value of 5.
let valueInColumn2 = getColumnValues(board, 2);
console.log(valueInColumn2); // Output: [5, ...]

// Row 3 has values [ '-', '9', '7', ...]
let valuesInRow3 = getRowValues(board, 3);
console.log(valuesInRow3); // Output: ['-', '9', '7', ...]
```

4. **Solution Representation:**
   - The solved Sudoku puzzle is represented in an array named `solution`.
   - Provides a structured and organized format for the solution.

```javascript
let solution = solveSudoku(board);
console.log(solution);
```

5. **Modular Project Structure:**
   - The project structure is organized with separate files for functions, the initial board state, and the solution.
   - Enhances code organization and readability.

```plaintext
project/
|-- solver.js
|-- board.js
|-- solution.js
|-- README.md
```

6. **Looping Structures:**
   - Leverages looping structures to iterate over the Sudoku grid and perform necessary computations.
   - Ensures efficient handling of each cell in the puzzle.

```javascript
// Example
for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
        // Perform actions on each cell
        let cellValue = board[row][col];
        // ...
    }
}
```

These features collectively contribute to a robust Sudoku solver project that is both modular and efficient, making use of JavaScript functions, arrays, and looping structures.

## Project Goals

The primary goals of this project are:

1. Provide an efficient and logical Sudoku solver.
2. Represent the puzzle state and solution in a structured manner.
3. Offer easy interpretation of column and row values within the puzzle.

## Technologies Used

- **JavaScript:** The solver is implemented in JavaScript for its versatility and browser compatibility.

## Project Structure

The project includes the following components:

- **`solver.js`:** Contains the Sudoku solver algorithm.
- **`board.js`:** Represents the initial state of the Sudoku puzzle.
- **`solution.js`:** Holds the solution to the Sudoku puzzle.

## How to Run the Project

To run the project, follow these steps:

1. Open the project folder in your preferred code editor.
2. Run the main JavaScript file (e.g., `solver.js`) using a JavaScript runtime or a web browser console.

## Usage

The project can be used to solve Sudoku puzzles by providing the initial state in the `board` array. The solution will be available in the `solution` array.

```javascript
// Example Usage
const { solveSudoku } = require('./solver');
let board = [
    "--5--9-7-",
    // ... (complete the board as needed)
];

let solution = solveSudoku(board);
console.log(solution);
```

## Acknowledgments

- This project is inspired by a puzzle from a Sudoku book (pg. 51).
- Thanks to the Sudoku community for insights into solving strategies and puzzle representations.

## Notes

- The Sudoku solver is implemented in JavaScript.
- The `board` array represents the initial state of the puzzle.
- The `solution` array provides the solution to the Sudoku puzzle.

Feel free to explore and use the solver for solving other Sudoku puzzles.
