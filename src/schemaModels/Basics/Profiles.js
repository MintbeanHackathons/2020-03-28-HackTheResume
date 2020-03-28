import Profile from "./Profile"

class Profiles {
  constructor(profiles) {
    this.profiles = profiles
  }

  static from(data) {
    const profiles = data.map((profile) =>
      Profile.from(profile)
    )
    return new Profiles(profiles)
  }
}

export default Profiles