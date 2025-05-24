function filterResources() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const category = card.getAttribute("data-category").toLowerCase();
    const show = title.includes(query) || category.includes(query);
    card.style.display = show ? "block" : "none";
  });
}

function openModal() {
  document.getElementById("resourceModal").style.display = "block";
}

function closeModal() {
  document.getElementById("resourceModal").style.display = "none";
}
