function save(service){
    let list = read();
    list.push(service);
    let val = JSON.stringify(list);
    localStorage.setItem("services", val);
}

function read(){
    let data = localStorage.getItem("services")
    console.log("my data" , data)
    if(!data){ // NOT data?
        // if i get here the LS is empty
        return [];
    } else{
        return JSON.parse(data)
    }
}

function deleteService(serviceId){
    let list = read()
    list.splice(serviceId,1)
    let val = JSON.stringify(list);
    localStorage.setItem("services", val)
    displayTableServices();
}