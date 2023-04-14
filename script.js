"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  // you could also do
  // modal.style.display = "block";
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// here we have assign event handler for each modal. this for loop is only adds all modal an event handler at once
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// btnCloseModal.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// // close when clicking outside that box i.e on overlay
// overlay.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key == "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
});
