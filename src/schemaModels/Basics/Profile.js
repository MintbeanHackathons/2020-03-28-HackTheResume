class Profile {
  constructor(network, username, url) {
    this.network = network
    this.username = username
    this.url = url
  }

  static from(data) {
    const { network, username, url } = data
    return new Profile(network, username, url)
  }
}

export default Profile