class Volunteering {
  constructor(
    organization,
    position,
    website,
    startDate,
    endDate,
    summary,
    highlights
  ) {
    this.organization = organization
    this.position = position
    this.website = website
    this.startDate = startDate
    this.endDate = endDate
    this.summary = summary
    this.highlights = highlights
  }

  static from(data) {
    const {
      organization,
      position,
      website,
      startDate,
      endDate,
      summary,
      highlights
    } = data

    return new Volunteering(
      organization,
      position,
      website,
      startDate,
      endDate,
      summary,
      highlights
    )
  }
}

export default Volunteering