document.addEventListener("DOMContentLoaded", function () {
  fetch("/ajax/posts/index.html")
    .then(res => res.text())
    .then(onLoad);

  let category = "all";
  function onLoad(content) {
    const $archive = document.getElementById("archive");
    $archive.innerHTML = content;
    htmx.process($archive);
    unveilEntries();

    const $paginator = document.getElementById("blogPagination");
    const $categories = document.getElementsByClassName("blog__categories")[0];

    $archive.addEventListener("htmx:afterSwap", onSwapArchive);

    function onSwapArchive({ detail }) {
      if (detail.successful) {
        if (detail.requestConfig.elt.classList.contains("blog__category")) {
          // Category filter
          $categories.classList.add("is-active");
        } else {
          // Paginator navigation or reset btn
          $categories.classList.remove("is-active");
        }

        unveilEntries();
      }
    }

    function unveilEntries() {
      setTimeout(() => {
        for (let $entry of $archive.querySelectorAll(".blog__entry")) {
          $entry.classList.add("visible");
        }
      }, 100);
    }
  }
});
