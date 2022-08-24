document.addEventListener(
  "DOMContentLoaded",
  function () {
    const button = document.getElementById("button");
    button.addEventListener("click", () => {
      alert("button clicked");
    });
  },
  false
);
