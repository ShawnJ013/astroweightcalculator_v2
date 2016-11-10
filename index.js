var planets = [
    { planet: 'the Sun', gravity: 27.9 },
    { planet: 'Mercury', gravity: 0.377 },
    { planet: 'Venus', gravity: 0.9032 },
    { planet: 'Earth', gravity: 1 },
    { planet: 'the Moon', gravity: 0.1655 },
    { planet: 'Mars', gravity: 0.3895 },
    { planet: 'Jupiter', gravity: 2.640 },
    { planet: 'Saturn', gravity: 1.139 },
    { planet: 'Uranus', gravity: 0.917 },
    { planet: 'Neptune', gravity: 1.148 },
    { planet: 'Pluto', gravity: 0.06 }
];

// Generate the select element
for (var i = 0; i < planets.length; i++) {
    var planet = planets[i];
    var optionElement = document.createElement('option');
    optionElement.value = planet.gravity;
    optionElement.innerHTML = planet.planet;

    var selectElement = document.getElementById('selectPlanet');
    selectElement.appendChild(optionElement);
}

// Bind function to click event; DOM click event; get weight use input and grab from DOM
var button = document.getElementById('calculateWeight');
button.onclick = function() {
    
    var inputWeight = document.getElementById('inputWeight');

    var weight = inputWeight.value;

    var selectElement = document.getElementById('selectPlanet');

    var selectedIndex = selectElement.selectedIndex;

    var selectedOption = selectElement.options[selectedIndex];

    var planetName = selectedOption.text;

    var planetValue = selectedOption.value;

    var userWeightOnPlanet = (Math.round(weight * planetValue * 100)/100).toFixed(2);

    var message = 'If you were on ' + planetName + ', your weight would be ' + userWeightOnPlanet + 'lbs!';
    // Assign message to output we fetched from DOM
    var output = document.getElementById('output');
    output.innerHTML = message;
};

//Create a function that will be called when a user clicks the button
//This function should grab the values entered by the user
//from the input element and the select element
//The function should then calculate the weight of the user
//on the selected planet and show the weight to the user in the p element