
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

function displayNames(){
    document.getElementById("tbRegister").innerHTML = " "
    document.getElementById("thRegister").innerHTML = " "

    document.getElementById("thRegister").innerHTML = `
    <tr>
        <th> Name </th>
        <th> Age </th>
        <th> Breed </th>
        <th> Gender </th>
    </tr>
    `;
    for (let i = 0; i < pets.length; i++) {
        document.getElementById("tbRegister").innerHTML +=`
        <tr>
            <td> ${pets[i].name} </td>
            <td> ${pets[i].age} </td>
            <td> ${pets[i].breed}</td>
            <td> ${pets[i].gender}</td>
        </tr>
        `
    }

    document.getElementById("tbRegister").innerHTML +=`
        <tr>
            <td> ${"Registered pets: " + pets.length} </td>
            <td> ${"Average age of pets: " + average()} </td>
        </tr>
        `
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