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

//search & filter
document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.querySelector(".search-box button");
  searchButton.addEventListener("click", filterRooms);

  function filterRooms() {
    const locationInput = document.getElementById("location");
    const priceInput = document.getElementById("price");
    const locationFilter = locationInput.value.toLowerCase();
    const priceFilter = parseFloat(priceInput.value); // Convert input to a floating-point number

    const allRoomItems = document.querySelectorAll(".room-section2 .room-item");
    const featuredRoomItems = document.querySelectorAll(
      ".room-section .room-item"
    );
    let anyMatchAllRooms = false;
    let anyMatchFeaturedRooms = false;

    allRoomItems.forEach((item) => {
      const roomTitle = item
        .querySelector(".room-title")
        .textContent.toLowerCase();
      const roomLocation = item
        .querySelector(".room-location")
        .textContent.toLowerCase();
      const roomPrice = parseFloat(
        item
          .querySelector(".room-price")
          .textContent.replace("Rs.", "")
          .replace("per month", "")
      );

      const locationMatch = roomLocation.includes(locationFilter);
      const priceMatch = isNaN(priceFilter) || roomPrice === priceFilter; // Check if price is not a number or matches exactly

      if (locationMatch && priceMatch) {
        item.style.display = "block";
        anyMatchAllRooms = true;
      } else {
        item.style.display = "none";
      }
    });

    featuredRoomItems.forEach((item) => {
      const roomLocation = item
        .querySelector(".room-location")
        .textContent.toLowerCase();
      const roomPrice = parseFloat(
        item
          .querySelector(".room-price")
          .textContent.replace("Rs.", "")
          .replace("per month", "")
      );

      const locationMatch = roomLocation.includes(locationFilter);
      const priceMatch = isNaN(priceFilter) || roomPrice === priceFilter; // Check if price is not a number or matches exactly

      if (locationMatch && priceMatch) {
        item.style.display = "block";
        anyMatchFeaturedRooms = true;
      } else {
        item.style.display = "none";
      }
    });

    displayNoResultsMessage(anyMatchAllRooms, "all-rooms-no-results");
    displayNoResultsMessage(anyMatchFeaturedRooms, "featured-rooms-no-results");
  }

  function displayNoResultsMessage(anyMatch, containerId) {
    const noResultsContainer = document.getElementById(containerId);
    if (anyMatch) {
      noResultsContainer.style.display = "none";
    } else {
      noResultsContainer.style.display = "block";
    }
  }
});

//add room image
let uploadCount = 0;

function showFileInput() {
  if (uploadCount < 3) {
    uploadCount++;
    const fileUploadDiv = document.getElementById(`fileUpload${uploadCount}`);
    fileUploadDiv.style.display = "block";
  } else {
    alert("You can only upload 3 photos");
  }
}

function changeImage(element) {
  var mainImg = document.getElementById("MainImg");
  mainImg.src = element.querySelector("img").src;
}
