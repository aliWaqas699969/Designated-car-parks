// Function to find nearest car park
async function findNearest() {
  const searchInput = document.getElementById("searchInput").value;
  // Bristol Open Data Api for designated car parks
  const apiUrl =
    "https://maps2.bristol.gov.uk/server2/rest/services/ext/ll_transport/MapServer/20/query?where=1%3D1&outFields=*&outSR=4326&f=json";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayResults(data);
  } catch (error) {
    displayError("An error occurred while fetching data");
  }
}

// Function to find car parks by type (not implemented)
function findByType() {
  alert("Functionality not implemented yet");
}

// Function to display search results or error message
function displayResults(results) {
  console.log(results);
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";
  if (results.length === 0) {
    displayError("No results found");
  } else {
    results.features.map((result) => {
      const resultDiv = document.createElement("div");
      resultDiv.classList.add("result");
      resultDiv.innerHTML = `
      <h3>${result.attributes.BLOCK_NAME}</h3>
      <p><strong>Geometry:</strong> ${result.distance}</p>
          `;
      resultsContainer.appendChild(resultDiv);
    });
  }
}

// Function to display error message
function displayError(message) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = `<p>${message}</p>`;
}
