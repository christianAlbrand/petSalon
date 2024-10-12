
let pets = [{
    name:"Scooby",
    age: 2,
    gender:"Male",
    service: "Hair Cut",
    breed: "Pug"
},{
    name:"Scrappy",
    age:6,
    gender:"Male",
    service: "Veterinary",
    breed: "Golden Retriever"
},{
    name:"Leyla",
    age:10,
    gender:"Female",
    service: "Shower",
    breed: "German Shepherd"
}];
//create pets

// function displayNames(){
//     document.getElementById("tbRegister").innerHTML = " "
//     document.getElementById("thRegister").innerHTML = " "

//     document.getElementById("thRegister").innerHTML = `
//     <tr>
//         <th> Name </th>
//         <th> Age </th>
//         <th> Breed </th>
//         <th> Gender </th>
//     </tr>
//     `;
//     for (let i = 0; i < pets.length; i++) {
//         document.getElementById("tbRegister").innerHTML +=`
//         <tr>
//             <td> ${pets[i].name} </td>
//             <td> ${pets[i].age} </td>
//             <td> ${pets[i].breed}</td>
//             <td> ${pets[i].gender}</td>
//         </tr>
//         `
//     }

//     document.getElementById("tbRegister").innerHTML +=`
//         <tr>
//             <td> ${"Registered pets: " + pets.length} </td>
//             <td> ${"Average age of pets: " + average()} </td>
//         </tr>
//         `
// }

function displayNamesCard(){
    document.getElementById("register-pets-container").innerHTML = " "
    for (let i = 0; i < pets.length; i++) {
        let servie = pets[i].service === "Shower" ; "Veterinary" ; "Hair Cut";
        document.getElementById("register-pets-container").innerHTML += `
        <div class ="register-pets-item">
            <p> Pet Name: ${pets[i].name} </p>
            <p> Pet Age: ${pets[i].age} </p>
            <p> Pet Breed: ${pets[i].breed} </p>
            <p> Pet Gender: ${pets[i].gender} </p>
            <p> Pet Service: ${pets[i].service} </p>
        </div>
        `
    }
}

function average(){
    let sum = 0
    let avr = 0
    for (let i = 0; i < pets.length; i++) {
        sum = sum + pets[i].age;
        avr = sum / pets.length;
    }
    return avr
}
//display pet names;
//console.log(pets[1].name);

//hint: use a for loop and travel the array
//hint: use brute force