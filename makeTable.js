
function makeTable(sorteddepartment){
    let col = [];
    for (let i = 0; i < sorteddepartment.length; i++) {
        for (let key in sorteddepartment[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    
    let table = document.createElement("table");
    
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
    }
    
    let divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    
    }
