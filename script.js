const SECTIONS = ["experience", "projects"];

document.addEventListener("DOMContentLoaded", function() {
  SECTIONS.forEach(section => {
    document.getElementById(`btn-${section}`).addEventListener(
      "click",
      e => {
        const section = e.target.id.split("btn-")[1];
        toggleSectionsVisibility(section);
      },
      false
    );
  });

  function toggleSectionsVisibility(selectedSection) {
    const $section = $(`#${selectedSection}`);
    if ($section.is(":hidden")) {
      $section.slideDown("slow");
    } else {
      $section.slideUp("slow");
    }
  }
});
