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
  $("profiles").append(profileData);
}
