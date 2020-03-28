import Experience from "./Experience"

class Work {
  constructor(work) {
    this.values = work
  }

  static from(data) {
    const userWork = data.map((w) => Experience.from(w))
    return new Work(userWork)
  }
}

export default Work