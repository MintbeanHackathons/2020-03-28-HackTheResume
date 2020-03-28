// Code for the Hackathon
console.log(resume);
// Adds name, picture and summary to the jumbotron
$("#picture").append($("<img>").attr("src", resume.basics.picture));
$("#Name").text(resume.basics.name);
$("#summary").text(resume.basics.summary);
// Adds location and profiles to the jumbotron
var locationData = $("<ul>");
for (let i in resume.basics.location) {
  var locationListElement = $("<li>");
  locationListElement.text(i + ": " + resume.basics.location[i]);
  locationData.append(locationListElement);
}
$("#location").append(locationData);
var profileData = $("<ul>");
for (let i of resume.basics.profiles) {
  for (let j in i) {
    var profileDataListElement = $("<li>");
    profileDataListElement.text(j + ": " + i[j]);
    profileData.append(profileDataListElement);
  }
  $("#profiles").append(profileData);
}
// The jumbotron is done. The rest are tiles of the resume data.
// function to add data to the webpage via tiles
function addData(tileId, resumeObject) {
  var data = $("<ul>");
  for (let i of resumeObject) {
    for (let j in i) {
      var dataListElement = $("<li>");
      dataListElement.text(j + ": " + i[j]);
      data.append(dataListElement);
    }
    tileId.append(data);
  }
}
// Adds the work data to the work tile
addData($("#work"), resume.work);
// Adds volunteering data to the webpage
var volunteerTile = $("#volunteering");
var volunteerData = $("<ul>");
for (let i of resume.volunteer) {
  for (let j in i) {
    var volunteerDataListElement = $("<li>");
    volunteerDataListElement.text(j + ": " + i[j]);
    volunteerData.append(volunteerDataListElement);
  }
  volunteerTile.append(volunteerData);
}
// Adds education data to the webpage
var educationTile = $("#education");
var educationData = $("<ul>");
for (let i of resume.education) {
  for (let j in i) {
    var educationDataListElement = $("<li>");
    educationDataListElement.text(j + ": " + i[j]);
    educationData.append(educationDataListElement);
  }
  educationTile.append(educationData);
}
// Adds awards data to the webpage
var awardsData = $("<ul>");
for (let i of resume.awards) {
  for (let j in i) {
    var awardsDataListElement = $("<li>");
    awardsDataListElement.text(j + ": " + i[j]);
    awardsData.append(awardsDataListElement);
  }
  $("#awards").append(awardsData);
}
// Adds publication data to the webpage
addData($("#publications"), resume.publications);
// Adds skills data to the webpage
addData($("#skills"), resume.skills);
// Adds language data to the webpage
addData($("#languages"), resume.languages);
// Adds interests data to the webpage
addData($("#interests"), resume.interests);
// Adds references data to the webpage
addData($("#references"), resume.references);
