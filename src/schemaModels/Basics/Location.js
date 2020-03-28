class Location {
  constructor(address, postalCode, city, countryCode, region) {
    this.address = address
    this.postalCode = postalCode
    this.city = city
    this.countryCode = countryCode
    this.region = region
  }

  static from(data) {
    const { address, postalCode, city, countryCode, region } = data

    return new Location(
      address,
      postalCode,
      city,
      countryCode,
      region
    )
  }
}

export default Location