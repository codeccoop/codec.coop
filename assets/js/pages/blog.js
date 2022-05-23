document.addEventListener("DOMContentLoaded", function () {
  const $archive = document.querySelector(".blog__posts");
  const $paginator = document.getElementById("blogPagination");

  const posts = Array.apply(null, document.querySelectorAll(".blog__entry"));

  let currentCategory = "all";
  const $categories = document.getElementsByClassName("blog__categories")[0];
  if ($categories) {
    const items = document.getElementsByClassName("blog__category");
    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener("click", onFilter);
    }

    $categories.querySelector("button").addEventListener("click", onResetCategories);
  }

  function onFilter(ev) {
    $categories.classList.add("is-active");
    if ($paginator) $paginator.classList.add("hidden");
  }

  function onResetCategories(ev) {
    currentCategory = "all";

    $categories.classList.remove("is-active");
    if ($paginator) $paginator.classList.remove("hidden");

    $archive.innerHTML = "";
    posts.forEach($post => {
      $archive.appendChild($post);
    });
  }
});
