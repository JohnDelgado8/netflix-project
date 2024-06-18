// Function to toggle the visibility of the search bar
function toggleSearchBar() {
  var searchBar = document.getElementById("searchBar");
  searchBar.style.display =
    searchBar.style.display === "none" || searchBar.style.display === ""
      ? "block"
      : "none";
}

// Function to perform the search (you can replace this with your own search logic)
function performSearch() {
  var searchInput = document.getElementById("searchInput").value;
  alert("Performing search for: " + searchInput);
}

// Attach the toggleSearchBar function to the click event of the search button
document
  .getElementById("searchButton")
  .addEventListener("click", toggleSearchBar);

document.addEventListener("DOMContentLoaded", function () {
  // Simulate a delay (you can adjust this as needed)
  setTimeout(function () {
    document.getElementById("loading-screen").style.display = "none";
  }, 1000); // 2000 milliseconds (2 seconds) delay in this example
});
