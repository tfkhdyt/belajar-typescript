class User {
  private name: string
  private age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  public sayName = (): void => {
    console.log('Nama saya adalah ' + this.name)
  }

  public setName = (name: string): void => {
    this.name = name
  }

  public getName = (): string => this.name

  public setAge = (age: number): void => {
    this.age = age
  }

  public getAge = (): number => this.age
}

const Taufik = new User('Taufik Hidayat', 19)
/* console.log(Taufik)
Taufik.sayName()
Taufik.setName('Fauzi')
Taufik.sayName() */

class Admin extends User {
  private read: boolean = true
  private write: boolean = true
  private phone: string
  private _email: string
  static role: string = 'admin'

  constructor(name: string, age: number, phone: string, email: string = '') {
    super(name, age)
    this.phone = phone
    this._email = email
  }

  public getRole = (): { read: boolean, write: boolean } => {
    return {
      read: this.read,
      write: this.write
    }
  }

  public setPhone = (phone: string): void => {
    this.phone = phone
  }

  public getPhone = (): string => this.phone

  set email(value: string) {
    if (!value.includes('@')) 
      throw new Error('Email tidak valid!')
    this._email = value
  }

  get email(): string {
    return this._email
  }
}

// const admin = new Admin('Fauzi', 8, '0895338865375')
// console.log(admin.getPhone())

// admin.email = 'tfkhdyt@pm.me'
// console.log(`Email saya adalah: ${admin.email}`)
console.log(Admin.role)
