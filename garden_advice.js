// Hardcoded values for the season and plant type
// TODO: Replace with prompt() to allow user interaction.
let season = "summer";
let plantType = "flower";

/**
 * Returns gardening advice based on the season.
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

// Generate gardening advice
let advice = "";
advice += getSeasonAdvice(season);
advice += getPlantAdvice(plantType);

// Output the generated advice
console.log(advice);
