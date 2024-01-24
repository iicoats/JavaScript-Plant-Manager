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
    species: ${plant.species}, water_schedule: ${plant.water};
    plantList.appendChild(li);

    }
};

function addPlant(name, species, water){
    const newPlant = { name, species, water};
    plant.push(newPlant);
}

Form.addEventListener("submit", addPlantFromForm)

function addBookFromForm(event){
    event.preventDefault();
}

const Name=form.Name.value;
const species=form.species.value;
const water=form.water.value;

addPlant(Name, species, water);
form.reset();

addPlant(Name, species, water);
displayPlants();
