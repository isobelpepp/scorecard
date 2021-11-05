# Scorecard

A simple one-page web app to help users keep track of their score in Bridge. I have played Bridge for years and have always found the scoring element of it extremely confusing. This app solves that problem and does it for you!

## User Stories

```
As a player
So that I can keep track of the score
I would like to start a new scorecard
```

```
As a player
So that the scorecard knows the bid
I would like the input the bid and which pair won the bidding
```

```
As a player
So that I can see the current scores
I would like to input the tricks both pairs made
```

```
As a player
So that I know what I need to win
I would like the scorecard to tell me what bid I would need to win a game
```

```
As a player
So that I understand the scoring properly
I would like an explanation of it by the scorecard
```

Scoring:

Bid and Made (below the line):
  - Undoubled ✅
  - Doubled ✅
  - Redoubled ✅

Overtricks (above the line):
  - Undoubled ✅
  - Doubled
    - Not vulnerable ✅
    - Vulnerable ✅
  - Redoubled
    - Not vulnerable ✅
    - Vulnerable

Defeated contracts:
  - Undoubled
    - Not vulnerable ✅
    - Vulnerable 
  - Doubled
    - Not vulnerable ✅
    - Vulnerable
  - Redoubled
    - Not vulnerable ✅
    - Vulnerable

Slam Bonus:
  - Small slam (not vulnerable) - 500 points
  - Small slam (vulnerable) - 750 points
  - Grand slam (not vulnerable) - 1000 points
  - Grand slam (vulnarable) - 1500 points

Doubled/Redoubled Bonus:
  - Made contract doubled (50 points)
  - Made contract redoubled (100 points)

Honours Bonus:
  - Four out of five trump suit honours (100 points)
  - All five trump suit honours or all four aces in NT contract (150 points)

Rubber Bonus:
  - Completed rubber in two games (700 points)
  - Completed rubber in three games (500 points)
  - Unfinished rubber:
    - 300 points if a side has won a game
    - 50 points if one side has a part-score

Final Score:
  - Two games = rubber
  - All points added up, whoever has the most wins
