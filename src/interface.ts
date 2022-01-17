interface Laptop {
  name: string
  isGaming: boolean
  _price: number
  on(): void
  off(): void
  get price(): string
  formatter: object
}

class HP implements Laptop {
  name: string
  isGaming: boolean
  _price: number

  constructor(name: string, isGaming: boolean, price: number) {
    this.name = name
    this.isGaming = isGaming
    this._price = price
  }

  on() {
    console.log('Turning on the laptop...')
  }

  off() {
    console.log('Turning off the laptop...')
  }

  formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  get price(): string {
    return this.formatter.format(this._price)
  }
}


const hp = new HP('HP 14s', false, 8_299_000)
hp.on()
const harga = hp.price
console.log(`Harga dari laptop ${hp.name} adalah ${hp.price}`)
