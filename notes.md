<!-- Logic Notes -->

let board = [
    "--5--9-7-",
    "27----8--",
    "----7----",
    "-97--4-5-",
    "-8-----1-",
    "-2-3--68-",
    "----9----",
    "--1----98",
    "-6-2--4--" 
];

I utilized a puzzle from my Sudoku book (pg.51) and created an array 
declared as the variable `board`. This array contains the length of 
0-8 representing 9 rows. Each of those rows corresponds to a row in 
the puzzle, and every digit or "-" (which represents an empty cell)
in a row represents the value in that particular column.

<!-- Column Interpretation -->

Row 0 reads "--5--9-7-",
        <!-- 012345678 -->

Column 2 has a value of 5.
Column 5 has a value of 9.
Column 8 has a value of 7.

Essentially the puzzle will read as such:

0  - - 5 - - 9 - 7 -
1  2 7 - - - - 8 - -
2  - - - - 7 - - - -
3  - 9 7 - - 4 - 5 -
4  - 8 - - - - - 1 -
5  - 2 - 3 - - 6 8 -
6  - - - - 9 - - - -
7  - - 1 - - - - 9 8
8  - 6 - 2 - - 4 - -
0  0 1 2 3 4 5 6 7 8

<!-- Solution -->

let solution = [
    "835429176",
    "279631845",
    "416578923",
    "697184352",
    "583962714",
    "124357689",
    "742893561",
    "351746298",
    "968215437"
];

0  8 3 5 4 2 9 1 7 6
1  2 7 9 6 3 1 8 4 5
2  4 1 6 5 7 8 9 2 3
3  6 9 7 1 8 4 3 5 2
4  5 8 3 9 6 2 7 1 4
5  1 2 4 3 5 7 6 8 9
6  7 4 2 8 9 3 5 6 1
7  3 5 1 7 4 6 2 9 8
8  9 6 8 2 1 5 4 3 7
0  0 1 2 3 4 5 6 7 8

