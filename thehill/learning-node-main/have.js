const fs = require('fs');
const os = require('os');
const path = require('path');

const clientFolderPath = path.join(__dirname, 'client2');

fs.mkdirSync(clientFolderPath);

function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

fs.writeFileSync(path.join(clientFolderPath, 'index.html'), '<h1>Home</h1><link rel="stylesheet" href="style.css">');
fs.writeFileSync(path.join(clientFolderPath, 'style.css'), `body { background-color: ${getRandomHexColor()}; }`);

const subdirectories = ['contact', 'about', 'blog'];
subdirectories.forEach(subdir => {
  const subdirectoryPath = path.join(clientFolderPath, subdir);
  fs.mkdirSync(subdirectoryPath);


  fs.writeFileSync(path.join(subdirectoryPath, 'index.html'), `<h1>${subdir.charAt(0).toUpperCase() + subdir.slice(1)}</h1><link rel="stylesheet" href="style.css">`);
  fs.writeFileSync(path.join(subdirectoryPath, 'style.css'), `body { background-color: ${getRandomHexColor()}; }`);
});

const osName = os.type();

fs.writeFileSync(path.join(clientFolderPath, 'info.txt'), `This is being run on a ${osName} computer!`);

console.log('Web structure created successfully.');