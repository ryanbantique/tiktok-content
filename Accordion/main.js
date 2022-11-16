const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeaders) => {
  accordionItemHeaders.addEventListener("click", (event) => {
    accordionItemHeaders.classList.toggle("active");
  });
});
