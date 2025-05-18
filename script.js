//your JS code here. If required.
// Get the element with ID 'level'
let element = document.getElementById('level');

// Initialize the level counter
let levelCount = 0;

// Traverse up the DOM tree to count levels, including <html>
while (element) {
    levelCount++;
    element = element.parentElement;
}

// Display the result
alert("The level of the element is: " + levelCount);
