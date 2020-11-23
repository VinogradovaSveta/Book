const lostLink = document.querySelector(".reg-button__sign");
const lostPopup = document.querySelector(".modal-authorization");
const lostClose = document.querySelector(".authorization-close");
const regLink = document.querySelector(".reg-button__reg");
const regPopup = document.querySelector(".modal-registration");
const regClose = document.querySelector(".registration-close");

lostLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  lostPopup.classList.add("modal-authorization-show");
  lostForm.focus();
});

regLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  regPopup.classList.add("modal-registration-show");
});

lostClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  lostPopup.classList.remove("modal-authorization-show");
  lostPopup.classList.remove("modallost-error");
});

regClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  regPopup.classList.remove("modal-registration-show");
  regPopup.classList.remove("modal-registration-error");
});

lostAction.addEventListener("submit", function (evt) {
  if (!lostForm.value || !lostEmail.value) {
    evt.preventDefault();
    lostPopup.classList.remove("modallost-error");
    lostPopup.offsetWidth = lostPopup.offsetWidth;
    lostPopup.classList.add("modallost-error");
  } else {
    localStorage.setItem("login", lostForm.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (lostPopup.classList.contains("modal-authorization-show")) {
      evt.preventDefault();
      lostPopup.classList.remove("modal-authorization-show");
      lostPopup.classList.remove("modallost-error");
    }
  }
});

lostAction.addEventListener("submit", function (evt) {
  if (!lostForm.value || !lostEmail.value) {
    evt.preventDefault();
    regPopup.classList.remove("modal-registration-error");
    regPopup.offsetWidth = lostPopup.offsetWidth;
    regPopup.classList.add("modal-registration-error");
  } else {
    localStorage.setItem("login", lostForm.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (lostPopup.classList.contains("modal-registration-show")) {
      evt.preventDefault();
      regPopup.classList.remove("modal-modalregistration-show");
      regPopup.classList.remove("modallost-error");
    }
  }
});
