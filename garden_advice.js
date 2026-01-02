// ================================
// Garden Advice Application
// ================================

// Hardcoded values for the season and plant type.
// TODO: Replace these values with prompt() to allow user interaction.
let season = "summer";
let plantType = "flower";

/**
 * Returns gardening advice based on the given season.
 * @param {string} season - The current season (e.g., summer, winter)
 * @returns {string} A string containing seasonal gardening advice
 */
function getSeasonAdvice(season) {
    if (season === "summer") {
        return "Water your plants regularly and provide some shade.\n";
    } else if (season === "winter") {
        return "Protect your plants from frost with covers.\n";
    } else {
        return "No advice for this season.\n";
    }
}

/**
 * Returns gardening advice based on the plant type.
 * @param {string} plantType - The type of plant (e.g., flower, vegetable)
 * @returns {string} A string containing plant-specific advice
 */
function getPlantAdvice(plantType) {
    if (plantType === "flower") {
        return "Use fertiliser to encourage blooms.";
    } else if (plantType === "vegetable") {
        return "Keep an eye out for pests!";
    } else {
        return "No advice for this type of plant.";
    }
}

// ================================
// Program Execution
// ================================

// Variable used to store the final gardening advice
let advice = "";

// Add advice based on the current season
advice += getSeasonAdvice(season);

// Add advice based on the selected plant type
advice += getPlantAdvice(plantType);

// Output the generated advice to the browser console
console.log(advice);

// ================================
// Future Improvements (TODO)
// ================================
// - Replace hardcoded values with user input using prompt()
// - Store advice in an object for multiple plants and seasons
// - Suggest plants that thrive in the given season
