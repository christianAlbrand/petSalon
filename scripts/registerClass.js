let pets = [];
let inputOwnerName = document.getElementById("txtOwnerName");
let inputName = document.getElementById("txtName");
let inputType = document.getElementById("txtType");
let inputAge = document.getElementById("txtAge");
let inputFemale = document.getElementById("txtFemale");
let inputMale = document.getElementById("txtMale");
let inputGender = "";
let inputDiet = document.getElementById("txtDiet");
let inputService = document.getElementById("txtService");

//object creator
function Pet(ownerName,petName, type, petAge, petGender, diet, service){
    //properties = parameter
    this.ownerName = ownerName;
    this.petName = petName;
    this.type = type;
    this.petAge = petAge;
    this.petGender = petGender;
    this.diet = diet;
    this.service = service;
}

function isValid(pet){
    let validation = true;
    inputOwnerName.classList.remove("error");
    inputName.classList.remove("error");
    inputService.classList.remove("error");
    if(pet.ownerName == ""){
        validation = false
        inputOwnerName.classList.add("error")
        $(".validationOwnerNameError").css("color", "red").show();
    }else{
        $("#txtOwnerName").removeClass("error");
        $(".validationOwnerNameError").hide();
    }
    if(pet.petName == ""){
        validation = false
        inputName.classList.add("error");
        $(".validationPetNameError").css("color", "red").show();
    } else{
        $("#txtName").removeClass("error");
        $(".validationPetNameError").hide();
    }
    if(pet.service==""){
        validation = false
        inputService.classList.add("error");
        $(".validationServiceError").css("color", "red").show();
    }else{
        $("#txtService").removeClass("error");
        $(".validationServiceError").hide();
    }
    return validation
}

function register(){
    if(inputFemale.checked) {
        //Male radio button is checked
        inputGender = inputFemale.value
    }else if(inputMale.checked) {
        //Female radio button is checked
        inputGender = inputMale.value
    }
    
    //create the obj
    let newPet = new Pet(inputOwnerName.value, inputName.value, inputType.value, inputAge.value, inputGender, inputDiet.value, inputService.value);
    if(isValid(newPet) == true){
        console.log(newPet);
        pets.push(newPet);
        displayTotals();
        displayTable();
        resetForms();
    } else{
        alert("Complete the infromation")
    }
}

function resetForms(){
    document.getElementById("txtOwnerName").value= "";
    document.getElementById("txtName").value = "";
    document.getElementById("txtType").value = "";
    document.getElementById("txtAge").value= "";
    document.getElementById("txtMale").checked = false
    document.getElementById("txtFemale").checked = false
    document.getElementById("txtDiet").value = "";
    document.getElementById("txtService").value= "";
}

function deletePet(petId){
    console.log("Deleting pet..." + petId)
    document.getElementById(petId).remove();
    pets.splice(petId,1);
    displayTable();
    displayTotals();
}


function init(){
    $(".validationOwnerNameError").hide();
    $(".validationPetNameError").hide();
    $(".validationServiceError").hide();
    console.log("init")
    let pet1 = new Pet("Albert","Scooby", "Bird", 99, "Male", "Vegies","gromming")
    let pet2 = new Pet("Marc","Max", "Dog", 99, "Male", "Meat","nails")
    let pet3 = new Pet("Christian","Leyla", "Cat", 99, "Male", "Meat","gromming")

    pets.push(pet1, pet2, pet3);
    console.log(pet1, pet2, pet3)
    displayTotals();
    // displayCards();
    displayTable();
}
window.onload=init;//wait to render the html