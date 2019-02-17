window.$ = require("jquery");

const SECTIONS = ["about", "experience", "projects"];

document.addEventListener("DOMContentLoaded", function() {
  SECTIONS.forEach(section => {
    document.getElementById(`btn-${section}`).addEventListener(
      "click",
      element => {
        const sectionName = element.target.id.split("btn-")[1];
        const $section = $(`#${sectionName}`);
        if ($section.is(":hidden")) {
          $section.insertAfter("#blocks");
        }
        toggleSectionsVisibility($section);
      },
      false
    );
  });

  function toggleSectionsVisibility($section) {
    if ($section.is(":hidden")) {
      $section.slideDown("slow");
    } else {
      $section.slideUp("slow");
    }
  }
});
