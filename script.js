"use strict";

const plant2= {
    name: "suflower",
    species: "sunflower",
    water: "weekly",
};


const plants = [];

plants.push(plant2)

function displayPlants(){
    const plantList = document.getElementById("plantList")
    plantList.innerHTML="";
   
    plants.forEach ((plant) =>{
        const li=document.createElement("li")

    li.innerHTML = `Name: ${plant.name}
    species: ${plant.species}, water_schedule: ${plant.water}`;
    plantList.appendChild(li);

    });
};

const form = document.getElementById("plants")

function addPlant(name, species, water){
    const newPlant = { name, species, water};
    plants.push(newPlant);
}

form.addEventListener("submit", addPlantFromForm)

function addPlantFromForm(event){
    event.preventDefault();


const name=form.name.value;
const species=form.species.value;
const water=form.water.value;

addPlant(name, species, water);
form.reset();
displayPlants();
}

displayPlants();
