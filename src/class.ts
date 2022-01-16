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

  constructor(name: string, age: number, phone: string) {
    super(name, age)
    this.phone = phone
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
}

const admin = new Admin('Fauzi', 8, '0895338865375')
console.log(admin.getPhone())
