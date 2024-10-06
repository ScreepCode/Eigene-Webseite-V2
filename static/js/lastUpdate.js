// Store dates in variables
const lastEdited = new Date("2024-10-06");
const today = new Date();

// Calculate the difference in milliseconds
const deltaMs = today - lastEdited;

// Convert the delta to days
const deltaDays = Math.floor(deltaMs / (1000 * 60 * 60 * 24));

const lastEditedInfoElement = document.getElementById("last-edited-info");
// Print the result
lastEditedInfoElement.innerHTML = `
Am ${lastEdited.toLocaleDateString("de-DE")} (${deltaDays} Tage her)
<br>
aus meiner Wohnung in Bruchsal
<br>
`;
