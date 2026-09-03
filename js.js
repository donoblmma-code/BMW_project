
const contactForm = document.getElementById("contactForm");
const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactMessage = document.getElementById("contactMessage");
const contactSubmit = document.getElementById("contactSubmit");
const contactStatus = document.getElementById("contactStatus");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = contactName.value.trim();
  const email = contactEmail.value.trim();
  const message = contactMessage.value.trim();

  contactStatus.className = "contact-status";

  if (!name || !email || !message) {
    contactStatus.textContent = "Please fill out all fields.";
    contactStatus.classList.add("show", "error");
    return;
  }

  if (!contactEmail.checkValidity()) {
    contactStatus.textContent = "Please enter a valid email address.";
    contactStatus.classList.add("show", "error");
    return;
  }

  contactSubmit.textContent = "SENDING...";
  contactSubmit.classList.add("sending");

  setTimeout(function() {
    contactSubmit.textContent = "SENT";
    contactSubmit.classList.remove("sending");

    contactStatus.textContent =
      "Thank you! Your message has been sent successfully.";

    contactStatus.classList.add("show", "success");

    contactForm.reset();

    setTimeout(function() {
      contactSubmit.textContent = "SEND";
    }, 2000);

  }, 1000);
});
