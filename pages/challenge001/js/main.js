(function() {
  "use strict";

  const email = document.querySelector("#email");
  console.log(email);
  const btn = document.querySelector("#submit");
  console.log(btn);

  btn.addEventListener(
    "click",
    function(event) {
      console.log(event);
    },
    false
  );
})();
