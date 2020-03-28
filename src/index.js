// import "./styles.css";
// import menu from "./menu";
// import $ from "jquery";

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
    "endDate": "2014-01-01",
    "summary": "Description...",
    "highlights": [
      "Started the company"
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

/**
 * Return updated acc object
 * @param  {Object} acc an object with key as section and value as list of item objects
 * @param  {Object} curr current item object to be added to acc
 */
const organizeItems = (acc, curr) => {
  if (acc[curr.type]) {
    acc[curr.type].push(curr);
    // sort items by menuOrder as it gets added to section
    acc[curr.type].sort((a, b) => {
      if (a.menuOrder < b.menuOrder) {
        return -1;
      } else if (a.menuOrder > b.menuOrder) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    acc[curr.type] = [curr];
  }
  return acc;
};

/**
 * Create an item element for rendering
 * @param  {Object} item A menu item object
 */
const createItemElement = item => {
  // Create container
  const $container = $("<article>").addClass("item-container");

  // Create header
  const $header = $("<header>").addClass("item-header");
  // indicate in name whether item is spicy or not
  const $name = $("<div>")
    .addClass(`${item.spicy ? "item-name spicy" : "item-name"}`)
    .append(item.name);
  const $price = $("<div>")
    .addClass("item-price")
    .append(`$${item.price.toFixed(2)}`);
  $header.append($name, $price);

  // Create description
  const $desc = $("<p>")
    .addClass("item-desc")
    .append(item.description);

  // Add header and description to item container
  $container.append($header, $desc);
  return $container;
};

/**
 * Render the items by section
 * @param  {Object} itemsBySection An object where keys are sections and values are corresponding items
 */
const renderItems = itemsBySection => {
  for (const section in itemsBySection) {
    for (const item of itemsBySection[section]) {
      $(`#${section}`).append(createItemElement(item));
    }
  }
};

/**
 * Remove all items from each section
 * @param  {sectionName:[items]} itemsBySection Menu items by section
 */
const deleteItems = itemsBySection => {
  for (const section in itemsBySection) {
    $(`#${section} > article`).remove();
  }
};

// Load items after applying filters
const loadItems = filters => {
  let menuItems = menu.items;
  let spicyStatus = filters.spicy;

  // Filter menu items
  menuItems = menuItems.filter(item => {
    // retain all items when spicy is selected
    // or show non-spicy items when spicy is not selected
    if (spicyStatus) {
      return true;
    } else if (!spicyStatus && !item.spicy) {
      return true;
    } else {
      return false;
    }
  });

  // Get items organized by sections
  const itemsBySection = menuItems.reduce(organizeItems, {});

  // Remove old item list before adding updated item list
  deleteItems(itemsBySection);
  renderItems(itemsBySection);
};

if (sample.basics) {
  $("header").append(`<h1> ${sample.basics.name}</h1`);
  $("header").append(`<h2>${sample.basics.label}</h2>`);
  if(sample.basics.picture) {
    $("header").append(`<img src=${sample.basics.picture} alt="picture">`);
  }
}
$("#education").append(`<p>hello</p>`);
console.log(sample);
