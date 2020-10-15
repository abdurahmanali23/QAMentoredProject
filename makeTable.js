let tickBox = "";
let table = document.createElement("table");
var k=0;
function makeTable(sorteddepartment){
    // EXTRACT VALUE FOR HTML HEADER.
    let col = [];
    for (let i = 0; i < sorteddepartment.length; i++) {
        for (let key in sorteddepartment[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    

    
    let tr = table.insertRow(-1);                   
    
    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");     
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
    
    for (let i = 0; i < sorteddepartment.length; i++) {
    
        tr = table.insertRow(-1);
    
        for (let j = 0; j < col.length; j++) {
            let tabCell = tr.insertCell(-1);
            tabCell.innerHTML = sorteddepartment[i][col[j]];
        }
    tickBox = document.createElement("INPUT");
    tickBox.type="checkbox";
    let tabCell = tr.insertCell(-1);
    tabCell.appendChild(tickBox);

    }
    
    let divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    
    }
