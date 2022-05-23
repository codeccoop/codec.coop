document.addEventListener("DOMContentLoaded", function () {
  const $el = document.getElementsByTagName("main")[0];
  const $workshops = document.getElementById("workshops");
  const $workshops_items = $workshops.querySelector(".workshops__items");
  const $workshops_breadcrumb = $workshops.querySelector(".workshops__breadcrumb");
  const $workshops_categories = Array.apply(
    null,
    $workshops_items.querySelectorAll(".workshops__items li")
  );
  $workshops_items.addEventListener("htmx:afterSwap", onSwapItems);

  $workshops_breadcrumb.addEventListener("click", onWorkshopsBreadcrumbClick);

  function onSwapItems({ detail }) {
    if (detail.successful) {
      $workshops_breadcrumb.classList.add("visible");
    }

    Array.apply(null, $workshops_categories).forEach($cat => {
      $cat.classList.remove("visible");
    });

    Array.apply(null, detail.elt.children).forEach($item => {
      $item.classList.add("visible");
    });
  }

  function onWorkshopsBreadcrumbClick() {
    $workshops_items.innerHTML = "";
    $workshops_categories.forEach($cat => {
      $workshops_items.appendChild($cat);
      setTimeout(() => $cat.classList.add("visible"), 0);
    });
    $workshops_breadcrumb.classList.remove("visible");
  }
});
