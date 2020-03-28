import Resume from "./Resume"
import Basics from "./Basics"
import Volunteer from "./Volunteer"
import Work from "./Work"

export const processJson = (json) => {
  try {
    return JSON.parse(json)
  } catch(e) {
    throw e
  }
}

export const generateResume = (json) => {
  const rawData = processJson(json)
  const {
    education,
    awards,
    publications,
    skills,
    languages,
    interests,
    references
  } = rawData
  const basics = Basics.from(rawData.basics)
  const volunteer = Volunteer.from(rawData.volunteer)
  const work = Work.from(rawData.work)

  return new Resume(
    basics,
    work,
    volunteer,
    education,
    awards,
    publications,
    skills,
    languages,
    interests,
    references
  )
}