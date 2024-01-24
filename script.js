"use strict";

const plants = {
    name:
    species:
    water:
};
console.log(plants)

const plant = [];
plant.push(plants)

function displayPlants(){
    const plantList = document.getElementById(plantList)
    plantList.innerHTML="";
    plant.forEach(plant){
        const li=document.createElement("li")

    li.textContent= Name: ${plant.name},
    species: ${plant.species}, water_schedule: ${plant.water_schedule};
    plantList.appendChild(li);

    }
};
