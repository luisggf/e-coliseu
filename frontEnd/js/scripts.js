// Scroll when clicking function
const scrolltoSectionServices = document.getElementsByClassName("btn-1");
// Loop through each button and add the event listener
for (const button of scrolltoSectionServices) {
  button.addEventListener("click", () => {
    const section2Element = document.querySelector("section:nth-of-type(2)");

    // Get the height of the fixed header (if you have any)
    const headerHeight = document.querySelector(
      "section:nth-of-type(1)"
    ).offsetHeight;

    // Calculate the offset to adjust scrolling position
    const scrollOffset =
      section2Element.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight -0;

    // Scroll to Section 2 with smooth behavior and adjust the scrolling position
    window.scrollTo({ top: scrollOffset, behavior: "smooth" });
  });
}
// End of scroll function
