document.addEventListener("DOMContentLoaded", function () {
  fetch("ajax/workshops/categories.html")
    .then(res => res.text())
    .then(onLoad);

  function onLoad(content) {
    const $workshops = document.getElementById("workshops");
    $workshops.innerHTML = content;
    htmx.process($workshops);
    onSwapItems({ detail: { elt: $workshops } });

    const $list = $workshops.querySelector(".workshops__items");
    const $breadcrumb = $workshops.querySelector(".workshops__breadcrumb");

    $workshops.addEventListener("htmx:afterSwap", onSwapItems);

    function onSwapItems({ detail }) {
      setTimeout(() => {
        for (let child of detail.elt.querySelectorAll(".workshops__items li")) {
          child.classList.add("visible");
        }
      }, 100);
    }
  }
});
