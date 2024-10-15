// function displayCards(){
//     let card =""
//     for (let i = 0; i < pets.length; i++) {
//         let pet = pets[i];
//         card += `
//         <div class = "pet ${pet.service}">
//             <p> Owner Name: ${pet.ownerName}</p>
//             <p>Pet Name: ${pet.petName}</p>
//             <p>Type: ${pet.type}</p>
//             <p>Pet Age: ${pet.petAge}</p>
//             <p>Pet Gender: ${pet.petGender}</p>
//             <p>Pet Diet: ${pet.diet}</p>
//             <p>Service: ${pet.service}</p>
//         </div>
//         `
//     }

//     document.getElementById("pets").innerHTML = card;
// }

function displayTotals(){
    document.getElementById("total").innerHTML=pets.length;
}

function displayTable(){
    document.getElementById("tbRegister").innerHTML = " "
    document.getElementById("thRegister").innerHTML = " "

    document.getElementById("thRegister").innerHTML = `
    <tr class = "thBckgr">
        <th> Owner Name </th>
        <th> Pet Name </th>
        <th> Type </th>
        <th> Pet Age </th>
        <th> Pet Gender </th>
        <th> Pet Diet </th>
        <th> Service </th>
    </tr>
    `;
    for (let i = 0; i < pets.length; i++) {
        let pet = pets[i];
        document.getElementById("tbRegister").innerHTML +=`
        <tr  class = "pet ${pet.service}">
            <td> ${pet.ownerName} </td>
            <td> ${pet.petName} </td>
            <td> ${pet.type}</td>
            <td> ${pet.petAge}</td>
            <td> ${pet.petGender} </td>
            <td> ${pet.diet} </td>
            <td> ${pet.service}</td>
        </tr>
        `
    }
}