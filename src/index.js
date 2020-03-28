const sample = {

  "basics": {
    "name": "John Doe",
    "label": "Programmer",
    "picture": "",
    "email": "john@gmail.com",
    "phone": "(912) 555-4321",
    "website": "http://johndoe.com",
    "summary": "A summary of John Doe...",
    "location": {
      "address": "2712 Broadway St",
      "postalCode": "CA 94115",
      "city": "San Francisco",
      "countryCode": "US",
      "region": "California"
    },
    "profiles": [{
      "network": "Twitter",
      "username": "john",
      "url": "http://twitter.com/john"
    }]
  },
  "work": [{
    "company": "Company",
    "position": "President",
    "website": "http://company.com",
    "startDate": "2013-01-01",
    "endDate": "",
    "summary": "Description...",
    "highlights": [
      "Started the company"
    ]
  },
  {
    "company": "CompanyB",
    "position": "VP of Operation",
    "website": "http://companyB.com",
    "startDate": "2012-01-01",
    "endDate": "2013-01-01",
    "summary": "Some info...",
    "highlights": [
      "Created awesomeness"
    ]
  }],
  "volunteer": [{
    "organization": "Organization",
    "position": "Volunteer",
    "website": "http://organization.com/",
    "startDate": "2012-01-01",
    "endDate": "2013-01-01",
    "summary": "Description...",
    "highlights": [
      "Awarded 'Volunteer of the Month'"
    ]
  }],
  "education": [{
    "institution": "University",
    "area": "Software Development",
    "studyType": "Bachelor",
    "startDate": "2011-01-01",
    "endDate": "2013-01-01",
    "gpa": "4.0",
    "courses": [
      "DB1101 - Basic SQL"
    ]
  }],
  "awards": [{
    "title": "Award",
    "date": "2014-11-01",
    "awarder": "Company",
    "summary": "There is no spoon."
  }],
  "publications": [{
    "name": "Publication",
    "publisher": "Company",
    "releaseDate": "2014-10-01",
    "website": "http://publication.com",
    "summary": "Description..."
  }],
  "skills": [{
    "name": "Web Development",
    "level": "Master",
    "keywords": [
      "HTML",
      "CSS",
      "Javascript"
    ]
  }],
  "languages": [{
    "language": "English",
    "fluency": "Native speaker"
  }],
  "interests": [{
    "name": "Wildlife",
    "keywords": [
      "Ferrets",
      "Unicorns"
    ]
  }],
  "references": [{
    "name": "Jane Doe",
    "reference": "Reference..."
  }]

}

const createWorkItem = (work) => {
  const highlights = [`<li>${work.summary}</li`];

  for (const highlight of work.highlights) {
    highlights.push(`<li> ${highlight} </li>`);
  }
  console.log(highlights.join(" "));
  return `
    <article class="work">
      <header> 
        <span> ${work.company? work.company: work.organization} </span>
        <span> <span>${work.position.toUpperCase()} </span> <span> ${work.startDate} to ${work.endDate? work.endDate : "present"} </span> </span>
      </header>
      <div class="description">
        <ul>
          ${highlights.join("")}
        </ul>
      </div> 
    </article>
  `
}

if (sample.basics) {
  $("header").append(`<h1> ${sample.basics.name}</h1`);
  $("header").append(`<p>${sample.basics.label}</p>`);
  if (sample.basics.picture) {
    $("header").append(`<img src=${sample.basics.picture} alt="picture">`);
  }
  $("#summary").append(`
    <h2> Summary </h2>
    <p>${sample.basics.summary}</p>
    `);
  $("#contact-details").append(`
    <h2> Contact Details </h2>
    ${sample.basics.phone ? `<p> Telephone: ${sample.basics.phone}</p>` : ""} 
    ${sample.basics.website ? `<p> Website: ${sample.basics.website}</p>` : ""} 
    <p> ${sample.basics.location.address} </p>
    <p> ${sample.basics.location.city}, ${sample.basics.location.region}, ${sample.basics.location.countryCode} </p>
    <p> ${sample.basics.location.postalCode} </p>
    `
  )
}

$("#work").append(`<h2> Employment History </h2>`);
for (const work of sample.work) {
  $("#work").append(createWorkItem(work));
}

$("#volunteer").append(`<h2> Volunteer </h2`);
for (const volunteer of sample.volunteer) {
  $("#volunteer").append(createWorkItem(volunteer));
}
$("#education").append(`<p>hello</p>`);
console.log(sample);

