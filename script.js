"use strict";

const plants = {
    Name: suflower,
    species: sunflower,
    water: weekly,
};
console.log(plants)

const plant = [];

plant.push(plants)

function displayPlants(){
    const plantList = document.getElementById(plantList)
    plantList.innerHTML="";
   
    plant.forEach((plant){
        const li=document.createElement("li")

    li.innerHTML = `Name: ${plant.name}
    species: ${plant.species}, water_schedule: ${plant.water}`;
    plantList.appendChild(li);

    });
};

addPlantFromForm();
function addPlant(name, species, water){
    const newPlant = { name, species, water};
    plant.push(newPlant);
}

Form.addEventListener("submit", addPlantFromForm)

function addPlantFromForm(event){
    event.preventDefault();
}

const Name=form.Name.value;
const species=form.species.value;
const water=form.water.value;

addPlant(Name, species, water);
form.reset();

addPlant(Name, species, water);
displayPlants();
