const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const actionLink = item.querySelector(".action-link");
  actionLink.addEventListener("click", (e) => {
    e.preventDefault();
    accordionItems.forEach((i) => {
      if (i !== item) {
        i.querySelector(".accordion-item-body").classList.remove("active");

        i.querySelector(".icon-minus").classList.add("passive");
        i.querySelector(".icon-minus").classList.remove("active");
        i.querySelector(".icon-plus").classList.add("active");
        i.querySelector(".icon-plus").classList.remove("passive");
      }
    });

    item.querySelector(".icon-minus").classList.remove("passive");
    item.querySelector(".icon-minus").classList.add("active");
    item.querySelector(".icon-plus").classList.remove("active");
    item.querySelector(".icon-plus").classList.add("passive");

    if (item.children[1].className == "accordion-item-body active") {
      actionLink.parentElement.parentElement.childNodes[3].childNodes[1].classList.remove(
        "passive"
      );
      actionLink.parentElement.parentElement.childNodes[3].childNodes[1].classList.add(
        "active"
      );
      actionLink.parentElement.parentElement.childNodes[3].childNodes[3].classList.add(
        "passive"
      );
      actionLink.parentElement.parentElement.childNodes[3].childNodes[3].classList.remove(
        "active"
      );
    }
    item.querySelector(".accordion-item-body").classList.toggle("active");
  });
});
