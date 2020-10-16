

function deleteRecord( id){
    let choice = confirm("are you sure you want to delete this record?");
    if(choice == true){
    records.splice(id,1);
    makeTable(records);
}

}

function editRecord(id){
    document.getElementById("addNI").style.visibility="visible";
        document.getElementById(id).style.visibility="visible";
        document.getElementById(id).style.visibility="visible";
        document.getElementById(id).style.visibility="visible";
        document.getElementById(id).style.visibility="visible";
        document.getElementById(id).style.visibility="visible";
}


    



