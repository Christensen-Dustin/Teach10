function getDetails(id, caller) {
    console.log("getDetails: id = " + id);
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            console.log(request.responseText);
            if(caller == "getInfo"){
                displayInfo(JSON.parse(request.responseText)[0]);
            }
            if(caller == "getChildren"){
                displayChild(JSON.parse(request.responseText)[0]);
            }
            if(caller == "getParents"){
                displayParent(JSON.parse(request.responseText)[0]);
                displayParent(JSON.parse(request.responseText)[1]);
            }
        }
    }
    if(caller == "getInfo"){
        request.open('GET', '/getPerson?id=' + id);
        request.send();
    }
    if(caller == "getChildren"){
        request.open('GET', '/getChildren?parent_FK=' + id);
        request.send();
    }
    if(caller == "getParents"){
        request.open('GET', '/getParent?child_FK=' + id);
        request.send();
    }
}

function getInfo() {
    console.log("getInfo: button clicked");
    getDetails(document.getElementsByName('id')[0].value, "getInfo");
}

function displayInfo(person) {
    console.log("displayInfo: " + person);
    document.getElementById('person').innerHTML = "<ul><li>First Name: " + person.firstn + "</li><li>First Last: " + person.lastn + "</li><li>Birthdate: " + person.birthday + "</li></ul>";   
}

function displayChild(person) {
    console.log("displayInfo: " + person);
    for (x in person) {
        document.getElementById('child').innerHTML = "<ul><li>First Name: " + person[x].firstn + "</li><li>First Last: " + person[x].lastn + "</li><li>Birthdate: " + person[x].birthday + "</li></ul>";
    }
}

function displayParent(person) {
    console.log("displayParent: " + person);
    for(x in person) {
        document.getElementById('parent').innerHTML = "<ul><li>First Name: " + person[x].firstn + "</li><li>First Last: " + person[x].lastn + "</li><li>Birthdate: " + person[x].birthday + "</li></ul>";
    }
}

function getParents() {
    console.log("getParents: button clicked");
    var details = getDetails(document.getElementsByName('id')[0].value, "getParents");
    
}

function getChildren() {
    console.log("getChildren: button clicked");
    var details = getDetails(document.getElementsByName('id')[0].value, "getChildren");
    
}