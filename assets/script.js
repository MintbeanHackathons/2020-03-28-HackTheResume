const resume = require("resume.json")

console.log("running...")

//header
const name = document.querySelector("#name")
name.textContent = resume.basics.name
const label = document.querySelector("#label")
label.textContent = resume.basics.label
const email = document.querySelector("#email")
email.textContent = resume.basics.email
const phone = document.querySelector("#phone")
phone.textContent = resume.basics.phone
const website = document.querySelector("#website")
website.textContent = resume.basics.website
const address = document.querySelector("#address")
const addressString = `${resume.basics.location.city} ${resume.basics.location.postalCode} ${resume.basics.location.countryCode}`
address.textContent = addressString

const profiles = document.querySelector("#profiles")

profileArr = resume.basics.profiles
profileArr.forEach(profile => {
    let link = document.createElement("a")
    link.textContent = profile.network
    link.url = profile.url
    profiles.appendChild(link)
})
//end header

const summary = document.querySelector("#summary")
summary.textContent = resume.basics.summary

const skills = document.querySelector("#skills")
const skillsArr = resume.skills
skillsArr.forEach(skill => {
    let list = document.createElement("ul")
    list.textContent = skill.name
    skill.keywords.forEach(key => {
        let item = document.createElement("li")
        item.textContent = key
        list.appendChild(item)
    })
    skills.appendChild(list)
})

//employment
const jobs = document.querySelector("#jobs")
const jobsArr = resume.work
jobsArr.forEach(job => {
    let par = document.createElement("p")
    let title = document.createElement("h4")
    par.appendChild(title)
    title.textContent = `${job.company} - ${job.position} \n`
    let dates = document.createElement("h5")
    dates.textContent = `From ${job.startDate} to ${job.endDate} \n`
    par.appendChild(dates)
    let summary = document.createElement("span")
    summary.textContent = job.summary
    par.appendChild(summary)
    let highlights = job.highlights
    let list = document.createElement("ul")
    highlights.forEach(item => {
        let item = document.createElement("li")
        list.appendChild(item)
    })
    jobs.appendChild(par)
})

//end employment

//volunteer
const volunteer = document.querySelector("#volunteer")
const volunteerArr = resume.volunteer
volunteerArr.forEach(job => {
    let par = document.createElement("p")
    let title = document.createElement("h4")
    par.appendChild(title)
    title.textContent = `${job.organization} - ${job.position} \n`
    let dates = document.createElement("h5")
    dates.textContent = `From ${job.startDate} to ${job.endDate} \n`
    par.appendChild(dates)
    let summary = document.createElement("span")
    summary.textContent = job.summary
    par.appendChild(summary)
    let highlights = job.highlights
    let list = document.createElement("ul")
    highlights.forEach(item => {
        let item = document.createElement("li")
        list.appendChild(item)
    })
    volunteer.appendChild(par)
})

//end volunteer

//education
const education = document.querySelector("#education")
const educationArr = resume.education
educationArr.forEach(school => {
    let par = document.createElement("p")
    let title = document.createElement("h4")
    par.appendChild(title)
    title.textContent = `${school.institution} - ${school.area} \n`
    let type = document.createElement("h5")
    type.textContent = `${school.studyType} \n`
    let dates = document.createElement("h5")
    dates.textContent = `From ${school.startDate} to ${school.endDate} \n`
    par.appendChild(dates)
    let courses = school.courses
    let list = document.createElement("ul")
    courses.forEach(item => {
        let item = document.createElement("li")
        list.appendChild(item)
    })
    education.appendChild(par)
})

//end education

//awards
const awards = document.querySelector("#awards")
const awardsArr = resume.awards
awardsArr.forEach(item => {
    let par = document.createElement("p")
    let title = document.createElement("h4")
    title.textContent = item.title
    par.appendChild(title)
    let date = document.createElement("h5")
    date.textContent = item.date
    par.appendChild(date)
    let awarder = document.createElement("h5")
    awarder.textContent = item.awarder
    par.appendChild(awarder)
    let description = document.createElement("h5")
    description.textContent = `Description: `
    par.appendChild(description)
    let content = document.createElement("span")
    content.textContent = `${item.summary}`
    par.appendChild(content)
    awards.appendChild(par)
})

//end awards

//publications
const publications = document.querySelector("#publications")
const pubArr = resume.publications
awardsArr.forEach(item => {
    let par = document.createElement("p")
    let title = document.createElement("h4")
    title.textContent = `${item.name} in ${item.publisher}`
    par.appendChild(title)
    let date = document.createElement("h5")
    date.textContent = item.releaseDate
    par.appendChild(date)
    let website = document.createElement("h5")
    website.textContent = item.website
    par.appendChild(website)
    let summary = document.createElement("h5")
    summary.textContent = `Summary: `
    par.appendChild(summary)
    let content = document.createElement("span")
    content.textContent = `${item.summary}`
    par.appendChild(content)
    publications.appendChild(par)
})

//end publications

//languages
const languages = document.querySelector("#languages")
const langArr = resume.languages
langArr.forEach(item => {
    let par = document.createElement("p")
    let lang = document.createElement("h5")
    lang.textContent = item.language
    par.appendChild(lang)
    let fluent = document.createElement("h5")
    fluent.textContent = item.fluency
    par.appendChild(fluent)
    languages.appendChild(par)
})
//end languages

//interests
const interests = document.querySelector("#interests")
const interestArr = resume.interests
interestArr.forEach(item => {
    let par = document.createElement("p")
    let inter = document.createElement("h5")
    inter.textContent = item.name
    par.appendChild(inter)
    let keyArr = item.keywords
    let list = document.createElement("ul")
    keyArr.forEach(key => {
        let item = document.createElement("li")
        item.textContent = key
        list.appendChild(item)
    })
    interests.appendChild(par)
})

//end interests