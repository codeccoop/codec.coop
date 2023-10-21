document.addEventListener("DOMContentLoaded", function () {
  var $el = document.getElementsByTagName("main")[0];

  function bindToEnter(fn, keyCode) {
    return function (ev) {
      if (ev.keyCode === keyCode) {
        fn(ev);
      }
    };
  }

  function toggleVisibility(ev) {
    if (ev.target.classList.contains("products__product-contact")) {
      window.scrollBy(
        0,
        document.getElementById("pageFooter").getBoundingClientRect().top
      );
    } else {
      if (!ev.target.classList.contains("products__product-description")) {
        ev.currentTarget.classList.toggle("open");
        if (ev.currentTarget.classList.contains("open")) {
          ev.currentTarget.setAttribute("aria-pressed", "true");
          ev.currentTarget.setAttribute("aria-expanded", "true");
        } else {
          ev.currentTarget.setAttribute("aria-pressed", "false");
          ev.currentTarget.setAttribute("aria-expanded", "false");
        }
      }
    }
  }

  var products = $el.getElementsByClassName("products__product");
  for (var i = 0; i < products.length; i++) {
    const thumbnail = products[i].querySelector(".products__product-badge");
    const description = products[i].querySelector(".products__product-toggle");
    thumbnail.addEventListener("click", () =>
      description.dispatchEvent(new Event("click"))
    );
    description.addEventListener("click", toggleVisibility);
    description.addEventListener("keydown", bindToEnter(toggleVisibility, 13));
  }
});
