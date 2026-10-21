const input = document.getElementById("country-input");
const button = document.getElementById("update-button");
const countryName = document.getElementById("country-name");


async function fetchCountryData(country) {
    try {
        const response = await fetch(`https://countries.dev/name/${country}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data[0]; // Return the first country object
    } catch (error) {
        console.error("Error fetching country data:", error);
        return null;
    }
}

async function updateCountryInfo() {
    const country = input.value.trim();
    if (country === "") {
        alert("Please enter a country name.");
        return;
    }

    const countryData = await fetchCountryData(country);
    if (countryData) {
        displayCountryInfo(countryData);
    } else {
        alert("Country not found. Please try again.");
    }
}

function displayCountryInfo(countryData) {
    countryName.textContent = countryData.name;
    document.getElementById("capital").textContent = "Capital: " + countryData.capital;
    document.getElementById("population").textContent = "Population: " + countryData.population;
    document.getElementById("currency").textContent = "Currency: " + countryData.currencies[0].name;
    document.getElementById("area").textContent = "Area: " + countryData.area;
    document.getElementById("language").textContent = "Language: " + countryData.languages[0].name;
    document.getElementById("country-flag").src = countryData.flags.png;
}

button.addEventListener("click", updateCountryInfo);