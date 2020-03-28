const resume = {
    "basics": {
        "name": "Julia Dufresne",
        "label": "Web Developer",
        "picture": "",
        "email": "juliadufresne@gmail.com",
        "phone": "(306) 681-4881",
        "website": "http://juliadufresne.com",
        "summary": "Former Content Designer & Developer who found a passion for coding on the job. Through various education streams, I am now a Web Developer looking to utilize my eye for design to build applications with the user's experience and accessibility as top priority.",
        "location": {
        "city": "Toronto",
        "countryCode": "Canada",
        "region": "Ontario"
        },
        "profiles": [{
        "network": "Twitter",
        "username": "julesdufresne",
        "url": "https://twitter.com/julesdufresne"
        }]
    },
    "work": [{
        "company": "Continental Cosmetics Ltd",
        "position": "Content Designer & Developer",
        "startDate": "December 2018",
        "endDate": "January 2020",
        "summary": {
            "summaryOne": "Utilized HTML, CSS, Adobe Creative Cloud and MailChimp to design and develop emails, banners and flyers in a cosmetic distribution company to promote brands, products, education and events to spas and salons Canada-wide.",
            "summaryTwo": "Revenue had positive growth each quarter, our education and events had a higher number of attendees, and an increasing number of spas and salons were taking on our brands."
        },
    },
    {
        "company": "Continental Cosmetics Ltd",
        "position": "Customer Support Expert",
        "startDate": "May 2018",
        "endDate": "December 2018",
        "summary": {
            "summaryOne": "Built relationships with customers via phone, email, and in person to ensure spas and salons had everything they needed to run a successful business.",
            "summaryTwo": "Through building close relationships with customers, I was able to find what brands, products and education were a good fit for each individual business."
        },
    },
{
    "company": "LifeSpa - LifeTime Fitness",
        "position": "Guest Service Manager",
        "startDate": "May 2017",
        "endDate": "May 2018",
        "summary": {
            "summaryOne": "Managed a team of Spa Coordinators whose main goal was to guide guests through their entire spa visit, from beginning to end.",
            "summaryTwo": "Utilizing internal software to manage guest book, staff scheduling, POS sales, inventory and product ordering allowed us to control revenue stream."
        },
}],
    "education": [{
        "institution": "Juno College of Technology",
        "area": "Web Development",
        "studyType": "Certificate",
        "date": "Winter 2020",
        "courses": [
            "Web Development Fundamentals",
            "JavaScript Fundamentals",
            "Web Development Immersive"
        ]
    },
{
    "institution": "Seneca College",
        "area": "Esthetics and Spa Management",
        "studyType": "Diploma",
        "date": "Fall 2014 - Spring 2017",
        "courses": [
            "Customer Service",
            "Business ManagementT"
        ]
}],
    "skills": [{
        "name": "Web Development",
        "level": "Master",
        "keywords": [
        "HTML",
        "CSS",
        "Javascript / jQuery",
        "React",
        "Working with APIs",
        "Firebase",
        "Web Accessibility",
        "Git / GitHub",
        "Email Development",
        "Wireframing",
        "PSD Conversion",
        "Responsive Design",
        "Sketch / Figma",
        "Adobe Photoshop",
        "Adobe Illustrator"
        ]
    }],
    "languages": [{
        "language": "English",
        "fluency": "Native speaker"
    }]
}

let name = resume.basics.name
let profession = resume.basics.label
let website = resume.basics.website
let phone = resume.basics.phone
let email = resume.basics.email
let summary = resume.basics.summary
let resumeSkills = resume.skills[0].keywords
let skillsToPrint = ""
let resumeEducation = resume.education
let educationToPrint = ""
let resumeExperience = resume.work
let experienceToPrint = ""

let header = `
    <div class="wrapper">
        <h1>Hi! I'm <span>${name}</span></h1>
        <h2>I'm a ${profession}</h2>
        <h3><a href="${website}">www.juliadufresne.com</a>  |  ${phone}  |  ${email}</h3>
    </div>
`

let profile = `
    <div class="context">
        <p>${summary}</p>
    </div>
`

resumeSkills.forEach((i, index)=>{
    console.log(i, index)
    skillsToPrint += `<p>${i}</p>`
})

let skills = `
<div class="context">
    ${skillsToPrint}
</div>
`

resumeEducation.forEach((i)=>{
    let school = i.institution
    let area = i.area
    let date = i.date

    educationToPrint += `
    <div class="context">
        <div>
            <p class="school">${school}</p>
            <p class="area">${area}</p>
        </div>
        <p class="date">${date}</p>
    </div>
    `
})

let education = `
        ${educationToPrint}
`

resumeExperience.forEach((i)=>{
    let title = i.position
    let company = i.company
    let startDate = i.startDate
    let endDate = i.endDate
    let summaryOne = i.summary.summaryOne
    let summaryTwo = i.summary.summaryTwo

    experienceToPrint += `
    <div class="experiences">
        <div class="jobInfo">
        <div class="jobTitle">
            <p class="position">${title}</p>
            <p class="company">${company}</p>
        </div>
        <div class="jobDates">
            <p class="sDate">${startDate}-</p>
            <p class="eDate">${endDate}</p>
        </div>
        </div>
        <div class="summaries">
            <p class="summary1">• ${summaryOne}</p>
            <p class="summary2">• ${summaryTwo}</p>
        </div>
    </div>
    `
})

let experience = `
<div class="context">
    ${experienceToPrint}
</div>
`

$('header').append(header)
$('.profile').append(profile)
$('.skills').append(skills)
$('.educationDiv').append(education)
$('.experience').append(experience)


