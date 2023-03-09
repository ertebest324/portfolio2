// Functionality to move to portfolio section
const botonPortfolio = document.getElementById("botonPortfolio");

botonPortfolio.addEventListener("click", scrollToPortfolio);

function scrollToPortfolio(event) {
  event.preventDefault();
  const portfolioSection = document.getElementById("portfolio");
  portfolioSection.scrollIntoView({ behavior: "smooth" });
}
// Functionality to move to portfolio section
