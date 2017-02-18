'use strict';
const fs = require('fs');
const readline = require('readline');

const statesContainingCity = buildDataStructure('zipdb.csv');

function buildDataStructure(db){
  let structure = {};
  console.log('Building Data structure');
  const rl = readline.createInterface({
    input: fs.createReadStream(db)
  });
  rl.on('line', (line) => {
    let data = line.split(',');
    let city = data[0].toLowerCase();
    let state = data[1];
    let entry = structure[city] || [];
    entry.push(state);
    structure[city] = entry;
  });
  rl.on('close', () => {
    console.log('READY');
    startApp();
  });
  return structure;
}

function startApp(){
  console.log('Enter City Name');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on('line', (line) => {
    let city = line.toLowerCase();
    console.log( statesContainingCity[city] || 'Not a city' );
  });
}
