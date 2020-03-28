import Volunteering from "./Volunteering"

class Volunteer {
  constructor(volunteering) {
    this.volunteering = volunteering
  }

  static from(data) {
    const volunteering = data.map((v) => Volunteering.from(v))
    return new Volunteer(volunteering)
  }
}

export default Volunteer