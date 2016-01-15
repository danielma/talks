import * as jQuery from 'jquery'

interface ToUpperCaseable {
  toUpperCase: () => string
  slice: (start: number, end: number) => string
}

function uppercaseString(str: ToUpperCaseable): string {
  return str.slice().toUpperCase()
}

const listOfStrings = ['daniel', 'hg', 'ma']
const uppercasedStrings = listOfStrings.map(uppercaseString)

const listOfNumbers = [1, 2, 3]
const uppercasedNumbers = listOfNumbers.map(uppercaseString)

listOfNumbers.map