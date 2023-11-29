export {randomName}

function randomName(array){
    return array[Math.floor(Math.random() * array.length)];
}