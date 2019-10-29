(function() {
  "use strict";

  const form = document.querySelector("#signup");
  const email = document.querySelector("input[type=email]");
  const alert = document.querySelector("#alert");
  const check = document.querySelector("#check");

  email.addEventListener(
    "input",
    function() {
      alert.style.visibility = "hidden";
      alert.style.opacity = 0;
    },
    false
  );

  form.addEventListener(
    "submit",
    function(event) {
      event.preventDefault();
      if (!email.validity.valid) {
        alert.style.visibility = "visible";
        alert.style.opacity = 1;
        email.focus();
        return;
      }

      form.style.position = "absolute";
      form.style.opacity = 0;
      check.style.visibility = "visible";
      check.style.opacity = 1;
      email.value = "";
    },
    false
  );
})();
