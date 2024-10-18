// List of comedogenic ingredients and their comedogenic ratings
const comedogenicIngredients = {
    'cocoa butter': 4,
    'coconut oil': 4,
    'isopropyl myristate': 5,
    'isopropyl palmitate': 4,
    'acetylated lanolin alcohol': 4,
    'wheat germ oil': 5,
    'laureth-4': 4,
    'myristyl myristate': 5,
    'octyl stearate': 5,
    'oleth-3': 5,
    'carrageenan': 5,
    // Add more ingredients as needed
};

// Function to check ingredients
function checkIngredients(ingredients) {
    // Split ingredients input by comma and trim whitespace
    const ingredientArray = ingredients.split(',').map(i => i.trim().toLowerCase());

    // Array to store results
    const results = [];

    // Check each ingredient against the comedogenic list
    ingredientArray.forEach(ingredient => {
        if (comedogenicIngredients[ingredient]) {
            // If found in the list, add to results with a warning
            results.push({ name: ingredient, rating: comedogenicIngredients[ingredient], status: 'comedogenic' });
        } else {
            // If not found, mark as safe
            results.push({ name: ingredient, status: 'safe' });
        }
    });

    return results;
}

// Function to display results on the webpage
function displayResults(results) {
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = ''; // Clear previous results
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = `${result.name}: ${result.status === 'comedogenic' ? `Comedogenic (Rating: ${result.rating})` : 'Safe'}`;
        li.className = result.status === 'comedogenic' ? 'comedogenic' : 'safe';
        resultList.appendChild(li);
    });

    // Show the results section
    document.getElementById('results').style.display = 'block';
}

// Event listener for the form submission
document.getElementById('ingredientForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get the value of the textarea input
    const ingredientsInput = document.getElementById('ingredientsInput').value;

    // Check the ingredients
    const results = checkIngredients(ingredientsInput);

    // Display the results
    displayResults(results);
});