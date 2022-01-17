class List<T> {
  private data: T[]

  constructor(...values: T[]) {
    this.data = values
  }

  push(...values: T[]): void {
    this.data.push(...values)
  }

  getAll(): T[] {
    return this.data
  }
}

const list = new List<string | number>(0, '1', 2)
console.log(list.getAll())
list.push(69)
console.log(list.getAll())
