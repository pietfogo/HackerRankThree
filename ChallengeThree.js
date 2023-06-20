'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    var newS = s.split("")
    const array = []
    array.push(...newS)
    //return array
    var cond = false
    var teste = parseInt(array[0] + array[1])
    if (teste == 12 && array[8] == 'P'){
        cond = null
    }
    if(array[8] == 'P' && teste != 12) {
        teste = teste + 12
        cond = true
    }
    for(let i = 0; i < 2; i++){
        array.pop()
    }
    if(cond == true){
    array.shift(array[0])
    array.shift(array[1])
    array.unshift(teste)
    }
    if(cond == false && teste == 12){
        array.shift(array[0])
        array.shift(array[1])
        var doisZeros = '00'
        array.unshift(doisZeros)
    }

    var stringArray = array.toString()
    var adequadoArray = stringArray.replace(/,/g, '')
    return adequadoArray
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
