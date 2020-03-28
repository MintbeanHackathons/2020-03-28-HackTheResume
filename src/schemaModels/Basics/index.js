import Location from "./Location"
import Profiles from "./Profiles"

class Basics {
  constructor(name, label, picture, email, phone, website, summary, location, profiles) {
    this.name = name
    this.label = label
    this.picture = picture
    this.email = email
    this.phone = phone
    this.website = website
    this.summary = summary
    this.location = location
    this.profiles = profiles
  }


  static from(data) {
    const { name, label, picture, email, phone, website, summary, location, profiles } = data
    const userLocation = Location.from(location)
    const userProfiles = Profiles.from(profiles)

    return new Basics(
      name,
      label,
      picture,
      email,
      phone,
      website,
      summary,
      userLocation,
      userProfiles
    )
  }
}

export default Basics