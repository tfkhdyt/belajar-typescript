const printName = (name: string): string => {
  return `Halo nama saya ${name}`
}

// console.log(printName('Taufik'))

const multiply = (number1: number, number2: number): number => number1 * number2

/* const number1 = 6
const number2 = 9
const multiplyResult = multiply(6, 9)

console.log(`${number1} × ${number2} = ${multiplyResult}`) */

type addType = (val1: number, val2: number) => number

const add: addType = (val: number, val2: number): number => val + val2

const number1 = 6
const number2 = 9
const addResult = add(6, 9)

console.log(`${number1} + ${number2} = ${addResult}`)
