// Set up canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 500;

// Function to draw a trapezoid (rect with growing base)
function rect(obj) {
    ctx.beginPath();
    let topWidth = 50; // Fixed top width
    let baseWidth = obj.baseWidth; // Variable bottom width
    let height = 40; // Fixed height of each section

    // Draw a trapezoid
    ctx.moveTo(obj.x - topWidth / 2, obj.y);
    ctx.lineTo(obj.x + topWidth / 2, obj.y);
    ctx.lineTo(obj.x + baseWidth / 2, obj.y + height);
    ctx.lineTo(obj.x - baseWidth / 2, obj.y + height);
    ctx.closePath();

    ctx.strokeStyle = "blueviolet";
    ctx.stroke();
}

// Object to track shape properties
let s1 = {
    x: canvas.width / 2, // Center position
    y: 50, // Starting position
    baseWidth: 60, // Starting base width
    change: { y: 50, baseWidth: 40 } // Incremental change
};

// Loop to draw stacked shapes
for (var i = 0; i < 5; i++) {
    rect(s1);
    s1.y += s1.change.y; // Move down
    s1.baseWidth += s1.change.baseWidth; // Increase base width
}
