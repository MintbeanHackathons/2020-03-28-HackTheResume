export const processJson = (json) => {
  try {
    return JSON.parse(json)
  } catch(e) {
    throw e
  }
}