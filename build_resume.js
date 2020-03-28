const readresume = require('./read-schema')

const buildResume = function (resumeObject) {
  const parsedData = JSON.parse(resumeObject)
  const basics = parsedData["basics"];
  const name = basics["name"];
  const label = basics["label"];
  const email = basics["email"];
  const markup = `
    <span>
      ${name}
    </span>
    <div>
      ${label}
    </div>
    <div>
      ${email}
    </div>

  `;
  return markup;
};
const renderResume = function (resume) {
  const $section = buildResume(resume);
  $('#build-resume').prepend($section);
};

jQuery(function ($) {
  const loadResume = function () {
    $.ajax({
      success: function (resume) {
        renderResume(resume);
      }
    });
  };
});