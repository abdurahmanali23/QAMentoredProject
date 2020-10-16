

function deleteRecord( id){
    let choice = confirm("are you sure you want to delete this record?");
    if(choice == true){
    records.splice(id,1);
    makeTable(records);
}

}

function editRecord(id) {

    document.getElementById("addNI").style.visibility="visible";
    document.getElementById("addName").style.visibility="visible";
    document.getElementById("addPhone").style.visibility="visible";
    document.getElementById("addAdd").style.visibility="visible";
    document.getElementById("addDep").style.visibility="visible";
    
    saveChanges = document.createElement("input");
    saveChanges.type="button";
    saveChanges.id = "save";
    saveChanges.value = "Save Changes";
    saveChanges.onclick=()=> confirmEdit(id);
    let newButton = document.getElementById("editButt");
    newButton.innerHTML = "";
    newButton.appendChild(saveChanges);
    
    
    
    
    document.getElementById("addNI").value = records[id].ninumber;
    document.getElementById("addName").value = records[id].fullname;
    document.getElementById("addPhone").value = records[id].phone;
    document.getElementById("addAdd").value = records[id].address;
    document.getElementById("addDep").value = records[id].department;
    
    }
    
    
    
function confirmEdit(id) {
    
    records.push(
    
    {"ninumber" : document.getElementById("addNI").value,
    "fullname" : document.getElementById("addName").value,
    "phone" : document.getElementById("addPhone").value,
    "address" : document.getElementById("addAdd").value,
    "department" : document.getElementById("addDep").value});
    
    
    
    records.splice(id, 1);
    makeTable(records);

    document.getElementById("addNI").style.visibility="hidden";
    document.getElementById("addName").style.visibility="hidden";
    document.getElementById("addPhone").style.visibility="hidden";
    document.getElementById("addAdd").style.visibility="hidden";
    document.getElementById("addDep").style.visibility="hidden";
    document.getElementById("save").style.visibility="hidden";
    }


    



