//responsive navbar
let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
  ul.classList.toggle("showData");

  if (ul.className == "showData") {
    document.getElementById("bar").className = "fa fa-xmark";
  } else {
    document.getElementById("bar").className = "fa fa-bars";
  }
});



function search() {
  // Get values from the input fields
  const location = document.getElementById("location").value;
  const price = document.getElementById("price").value;

  // Perform search logic (replace this with your actual search logic)
  const results = performSearch(location, price);

  // Display results
  displayResults(results);
}

function performSearch(location, price) {
  // Replace this with your actual search logic
  // For demonstration purposes, let's assume an array of sample data
  const sampleData = [
    { location: "City A", price: 1000 },
    { location: "City B", price: 1500 },
    { location: "City C", price: 1200 },
  ];

  // Filter results based on user input
  const filteredResults = sampleData.filter(
    (item) =>
      item.location.toLowerCase().includes(location.toLowerCase()) &&
      item.price <= parseInt(price || Infinity)
  );

  return filteredResults;
}

function displayResults(results) {
  const resultsContainer = document.getElementById("results-container");

  // Clear previous results
  resultsContainer.innerHTML = "";

  if (results.length === 0) {
    resultsContainer.innerHTML = "No results found.";
    return;
  }

  // Display results
  results.forEach((result) => {
    const resultElement = document.createElement("div");
    resultElement.textContent = `Location: ${result.location}, Price: $${result.price}`;
    resultsContainer.appendChild(resultElement);
  });
}
