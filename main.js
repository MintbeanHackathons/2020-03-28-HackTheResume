function myFunction() {
  alert("Page is loaded");
}

$.getJSON("data/sample.json", function(json) {
  let basics = [];
  let work = [];
  for (const eachItem in json.basics) {
    if (json.basics.hasOwnProperty(eachItem)) {
      basics.push(json.basics[eachItem]);
    }
  }

  console.log(json.work);

  //Building basics HTML:
  $(".navName").html(basics[0]);
  $(".nameOnly").html(basics[0]);
  $(".address").html(
    basics[7]["address"] +
      " · " +
      basics[7]["postalCode"] +
      " · " +
      basics[7]["city"] +
      " · " +
      basics[7]["region"] +
      " · " +
      basics[7]["countryCode"]
  );
  $(".email").html(basics[3]); //Cannot access HTML elements that are inside other HTML elements.
  $(".aboutMe").html(basics[6]);

  //Building Experience HTML:
  //Ideally what I what is to build each HTML element based on each work object and
  //then use those individual HTML elements to build a div which I then add to document.
  //But I ran out of time trying to figure out jQuery

  let divTitle, divDesc;
  json.work.forEach(function(d) {
    console.log(d);
    divTitle = document.createElement("h3");
    $(divTitle).html(d["position"]);

    // $(".resume-title").html(d["position"]);
  });

  let divContainer = document.getElementById("divResume");
  divContainer.innerHTML = "";
  divContainer.appendChild(divTitle);

  // // CREATE DYNAMIC TABLE.
  // var table = document.createElement("table");

  // // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

  // var tr = table.insertRow(-1);                   // TABLE ROW.

  // for (var i = 0; i < col.length; i++) {
  //     var th = document.createElement("th");      // TABLE HEADER.
  //     th.innerHTML = col[i];
  //     tr.appendChild(th);
  // }

  // // ADD JSON DATA TO THE TABLE AS ROWS.
  // for (var i = 0; i < myBooks.length; i++) {

  //     tr = table.insertRow(-1);

  //     for (var j = 0; j < col.length; j++) {
  //         var tabCell = tr.insertCell(-1);
  //         tabCell.innerHTML = myBooks[i][col[j]];
  //     }
  // }

  // // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
  // var divContainer = document.getElementById("showData");
  // divContainer.innerHTML = "";
  // divContainer.appendChild(table);
});
