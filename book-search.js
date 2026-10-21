const searchForm = document.getElementById("book-search-form");
const searchInput = document.getElementById("search-input");
const resultsList = document.getElementById("results"); 
 searchForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  const query = searchInput.value.trim();
  if (query === "") {
    resultsList.innerHTML = "<li>Please enter a search term.</li>";
    return;
  }

  try {
    const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    displayResults(data.docs);
  } catch (error) {
    console.error("Error fetching search results:", error);
    resultsList.innerHTML = "<li>There was an error fetching the search results. Please try again later.</li>";
  }
});

function displayResults(books) {
  resultsList.innerHTML = ""; // Clear previous results
  if (books.length === 0) {
    resultsList.innerHTML = "<li>No results found.</li>";
    return;
  }

  books.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.textContent = book.title;
    resultsList.appendChild(listItem);
  });
}       