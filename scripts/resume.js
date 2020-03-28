const getResume = filePath => {
  fetch(filePath)
    .then(response => {
      return response.json();
    })
    .then(data => {
      // console.log(data.basics);
      renderResume(data);
    });
};

const renderResume = data => {
  renderHeader(data.basics);
  renderContactInfo(data.basics);
  renderAbout(data.basics);
  renderProfiles(data.basics.profiles);
};

///////////////////////////////////////////////////
//     Resume Section Templates
///////////////////////////////////////////////////
// Each function below is a template for a single section
// of the resume

// The header, containing full name and job title
const renderHeader = basics => {
  const html = `
    <h1>${basics.name}</h1>
    <h2>${basics.label}</h2>
  `;
  $(".header").html(html);
};

const renderContactInfo = basics => {
  const html = `
    <aside>Contact</aside>
    <div>
      <p><strong>Email</strong>: ${basics.email}</p>
      <p><strong>Phone:</strong> ${basics.phone}</p>
      <p><strong>Website:</strong> <a href="${basics.website}">${basics.website}</a>
      </p>
    </div>
  `;
  $(".contact").html(html);
};

const renderAbout = basics => {
  const html = `
    <aside>About</aside>
    <div>
      <p>${basics.summary}</p>
    </div>
  `;
  $(".about").html(html);
};

const renderProfiles = profileInfo => {
  // create an array of all of the social media profiles, then join them
  // together
  const profiles = profileInfo
    .map(item => {
      return `
      <div>
        <strong>${item.network}</strong>
        <a href="${item.url}">${item.username}</a>
      </div>
    `;
    })
    .join("");

  const html = `
    <aside>Profiles</aside>
    <div>
      <p>${profiles}</p>
    </div>
  `;
  $(".profiles").html(html);
};
///////////////////////////////////////////////////
//  End of Resume Section Templates
///////////////////////////////////////////////////

// Main event loop
$(function() {
  getResume("./data/resume.json");
});
