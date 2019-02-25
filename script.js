window.$ = require("jquery");

const SECTIONS = ["about", "experience", "projects"];
const CONTACTS = ["resume", "github", "linkedin", "email"];

$(document).ready(() => {
  addSectionClickListeners();
  addContactClickListeners();
});

function addContactClickListeners() {
  CONTACTS.forEach(contact => {
    $(`#contact--${contact}`).click(() => {
      sendGAEvent(contact);
      return true;
    });
  });
}

function addSectionClickListeners() {
  SECTIONS.forEach(section => {
    $(`#btn-${section}`).click(() => {
      toggleSectionVisibility(section);
      sendGAEvent(section);
    });
  });
}

function toggleSectionVisibility(section) {
  const $section = $(`#${section}`);
  if ($section.is(":hidden")) {
    $section.prependTo($("#blocks"));
    $section.slideDown("slow");
  } else {
    $section.slideUp("slow");
  }
}

function sendGAEvent(label) {
  if (!ga) return;
  ga("send", "event", "click", "buttons", label);
}
