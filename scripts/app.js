import { randomName } from "./randomFunction.js";

let input = document.getElementById("input");
let addBtn = document.getElementById("addBtn");
let randomBtn = document.getElementById("randomBtn");
let name = document.getElementById("name");
let removeBtn = document.getElementById("removeBtn");

let nameArray = [];
if(localStorage.getItem("names")){
    nameArray = JSON.parse(localStorage.getItem("names"));
}


addBtn.addEventListener('click', function(){
    nameArray.push(input.value);
    input.value = "";

    localStorage.setItem("names", JSON.stringify(nameArray));

})

randomBtn.addEventListener('click', function(){
    name.textContent = randomName(nameArray);
})

removeBtn.addEventListener('click', function(){
   let index = nameArray.indexOf(input.value);
   nameArray.splice(index, 1);
   input.value = "";
   localStorage.setItem("names", JSON.stringify(nameArray));
})

