// Get all the tab elements
const tabs = document.querySelectorAll(".tab");

// Get all the section elements
const sections = document.querySelectorAll(".sec");

// Add event listeners to the tabs
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // Remove the "hidden" class from all sections
    sections.forEach((section) => {
      section.classList.add("hidden");
    });

    // Add the "hidden" class to all sections except the one corresponding to the clicked tab
    sections[index].classList.remove("hidden");

    // Remove the "active" class from all tabs
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    // Add the "active" class to the clicked tab
    tabs[index].classList.add("active");
  });
});