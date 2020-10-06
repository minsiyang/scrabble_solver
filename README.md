# Scrabble Solver

## Requirements
Given a word, compute the scrabble score for that word.

**Letter Values**

|Letter	           |    Value |
| :--:             |  :--:    |
|A, E, I, O, U, L, N, R, S, T	| 1 |
|D, G	  | 2  |
|B, C, M, P	 | 3 |
|F, H, V, W, Y |	4 |
|K |	5 |
|J, X	 | 8 |
|Q, Z  | 10 |

### Acceptance Criteria
```
scrabble = Scrabble.new('')
scrabble.score # => 0

scrabble = Scrabble.new(" \t\n")
scrabble.score # => 0

scrabble = Scrabble.new(nil)
scrabble.score # => 0

scrabble = Scrabble.new('a')
scrabble.score # => 1

scrabble = Scrabble.new('f')
scrabble.score # => 4

scrabble = Scrabble.new('street')
scrabble.score # => 6

scrabble = Scrabble.new('quirky')
scrabble.score # => 22

scrabble = Scrabble.new('OXYPHENBUTAZONE')
scrabble.score # => 41
```

Object:  Scrabble, upon initializing, takes one argument
Function: .score(), iterate the string array
                    find the point of each character
                    add the point to the total
                    return the total of the scrabble point

|    input      |      output       |
|     :--:      |       :--:        |
|    "a"        |         1         |
|    "d"        |         2         |
|    "b"        |         3         |
|    "af"       |         5         |
|    "awe"      |         6         |
|   "STREET"    |         6         |
|   " "         |         0         |
|   null        |         0         |
|   " \t\n"     |         0         |
