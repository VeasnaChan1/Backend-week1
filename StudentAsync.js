import fs from 'fs/promises';

const filePath = "./hello1.txt"; 

async function run() {
// Write to a file (asynchronously) 
await fs.writeFile(filePath, "Hello, Node.js async!"); 
// Read the file (asynchronously) 
const content = await fs.readFile(filePath, "utf8"); 
console.log("File content:", content);
}

run();