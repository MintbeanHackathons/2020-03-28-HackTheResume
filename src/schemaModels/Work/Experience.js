class Experience {
  constructor(company, position, website, startDate, endDate, summary, highlights) {
    this.company = company
    this.position = position
    this.website = website
    this.startDate = startDate
    this.endDate = endDate
    this.summary = summary
    this.highlights = highlights
  }

  employmentTime() {
    return `${this.startDate} - ${this.endDate}`
  }

  static from(data) {
    const { company, position, website, startDate, endDate, summary, highlights } = data
    return new Experience(
      company,
      position,
      website,
      startDate,
      endDate,
      summary,
      highlights
    )
  }
}

export default Experience