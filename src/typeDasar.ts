// string
const nama: string = 'Taufik Hidayat'
console.log(`Halo, perkenalkan nama saya ${nama}`)

// number
const umur: number = 19
console.log(`Saya berumur ${umur} tahun`)

// boolean
const isMarried: boolean = false
let marriedStatus: string
if (isMarried)
  marriedStatus = 'sudah menikah'
else 
  marriedStatus = 'belum menikah'
console.log(`Saya ${marriedStatus}`)

// any
let hero: any = 'Spider-Man'
hero = 69
hero = true
hero = {} || []

export {}
