function addRecord() {

        document.getElementById("addNI").style.visibility="visible";
        document.getElementById("addName").style.visibility="visible";
        document.getElementById("addPhone").style.visibility="visible";
        document.getElementById("addAdd").style.visibility="visible";
        document.getElementById("addDep").style.visibility="visible";
        document.getElementById("addRec").style.visibility="visible";
    
    }
    function confirmAdd() {
        records.push(
        {"ninumber" : document.getElementById("addNI").value, 
        "fullname" : document.getElementById("addName").value,
        "phone" : document.getElementById("addPhone").value,
        "address" : document.getElementById("addAdd").value,
        "department" : document.getElementById("addDep").value}
        );
        
        makeTable(records);
        
        }  