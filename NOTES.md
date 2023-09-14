# Notes

# Description

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples

```
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
```

# Domain

- number
- digits
- input: non-negative number
- output: single digit number

## Rules
- sum of all the digit of a number

## Backlog
- convert the input to string
- loop over digits
- convert digit to int
- accumulate the sum of the digits in a variable

## Legend

- 🟩 TODO
- 🚧 IN PROGRESS
- ✅ DONE
- ❌ ERROR

### Pomodoro 1 🍅:

- initial setup
  - update README ✅
  - update NOTES ✅
  - update package.json ✅
  - update code/test files ✅
- domain description ✅
- perform the 'canary' test just to check if the structure works ✅
- backlog ✅

