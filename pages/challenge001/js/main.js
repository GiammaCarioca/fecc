(function() {
  "use strict";

  const email = document.querySelector("#email");
  const btn = document.querySelector("#submit");
  const form = document.querySelector("form");
  const alert = document.querySelector(".alert");
  const check = document.querySelector(".check");

  email.addEventListener("input", function(event) {
    if (!email.validity.valid) {
      alert.style.opacity === 1;
    }
  });

  btn.addEventListener(
    "click",
    function(event) {
      if (!email.validity.valid) {
        alert.style.opacity = 1;
        event.preventDefault();
      } else {
        form.style.display = "none";
        check.style.opacity = 1;
        email.value = "";
        event.preventDefault();
      }
    },
    false
  );
})();
