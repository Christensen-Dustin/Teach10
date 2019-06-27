function getDetails(id, caller) {
    console.log("getDetails: id = " + id);
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            console.log(request.responseText);
            if(caller == "getInfo"){
                displayInfo(JSON.parse(request.responseText)[0]);
            }
        }
    }
    request.open('GET', '/getPerson?id=' + id);
    request.send();
}

function getInfo() {
    console.log("getInfo: button clicked");
    getDetails(document.getElementsByName('id')[0].value, "getInfo");
}

function displayInfo(person) {
    console.log("displayInfo: " + person);
    document.getElementById('person').innerHTML = "<ul><li>First Name: " + person.firstn + "</li><li>First Last: " + person.lastn + "</li><li>Birthdate: " + person.birthday + "</li></ul>";    
}


function getParents() {
    var details = getDetails(document.getElementsByName('id')[0].value);
    
}

function getChildren() {
    var details = getDetails(document.getElementsByName('id')[0].value);
    
}