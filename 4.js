const fs = require('fs');

function a(x, y) {
    return x ** y;
}

let variable = String(a(2, 3));

fs.writeFileSync("txt.txt", variable);