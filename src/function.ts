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

// console.log(`${number1} + ${number2} = ${addResult}`)

// default parameter value

const getFullName = (firstName: string, lastName: string = 'Hidayat'): string => firstName + ' ' + lastName

const firstName = 'Fauzi'

// console.log(`Nama lengkap saya adalah ${getFullName(firstName)}`)

// optional parameter value
const printNumber = (val1: number, val2?: number): string => val1 + ' ' + val2

console.log(printNumber(6))
