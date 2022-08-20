const container = document.querySelector(".container");
const btn = document.querySelector("button");
const modal = document.querySelector("p");

let toggleModal = false;

btn.addEventListener("click", displayModal);

function displayModal() {
  toggleModal = !toggleModal;
  if (toggleModal) {
    modal.className = "active";
  } else  {
    modal.className = "not-show";
  }
}
