let pets = [];

//object creator
function Pet(ownerName,petName, type, petAge, petGender, diet, service){
    //properties = parameter
    this.ownerName = ownerName;
    this.petName = petName;
    this.type = type
    this.petAge = petAge;
    this.petGender = petGender;
    this.diet = diet;
    this.service = service;
}

function register(){
    let inputOwnerName = document.getElementById("txtOwnerName").value;
    let inputName = document.getElementById("txtName").value;
    let inputType = document.getElementById("txtType").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputFemale = document.getElementById("txtFemale")
    let inputMale = document.getElementById("txtMale")
    let inputGender = ""
    if(inputFemale.checked) {
        //Male radio button is checked
        inputGender = inputFemale.value
    }else if(inputMale.checked) {
        //Female radio button is checked
        inputGender = inputMale.value
    }
    let inputDiet = document.getElementById("txtDiet").value;
    let inputService = document.getElementById("txtService").value;
    //create the obj
    let newPet = new Pet(inputOwnerName, inputName, inputType, inputAge, inputGender, inputDiet, inputService);
    console.log(newPet);
    pets.push(newPet);
    document.getElementById("txtOwnerName").value= "";
    document.getElementById("txtName").value = "";
    document.getElementById("txtType").value = "";
    document.getElementById("txtAge").value= "";
    document.getElementById("txtMale").checked = false
    document.getElementById("txtFemale").checked = false
    document.getElementById("txtDiet").value = "";
    document.getElementById("txtService").value= "";
}

function init(){
    console.log("init")
    let pet1 = new Pet("Albert","Scooby", 99, "Male", "Grooming")
    let pet2 = new Pet("Marc","Leyla", 32, "Male", "Hair Cut")
    let pet3 = new Pet("Christian","Max", 12, "Female", "Grooming")

    pets.push(pet1, pet2, pet3);
    console.log(pet1, pet2, pet3)
}
window.onload=init;//wait to render the html