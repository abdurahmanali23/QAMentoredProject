function filterByDpt() {

if (document.getElementById("departments").value=="All"){
    let filtRecord = records;
  
      makeTable(filtRecord);

}

  if (document.getElementById("departments").value=="IT") {
    let filtRecord = records.filter(function(item){
      return item.department == "IT"; 
    });

    makeTable(filtRecord);
}

  if (document.getElementById("departments").value=="HR") {
    let filtRecord = records.filter(function(item){
      return item.department == "HR"; 
    });
    makeTable(filtRecord); 
    
  }
  if (document.getElementById("departments").value=="Sales") {
    let filtRecord = records.filter(function(item){
      return item.department == "Sales"; 
    });
     
    makeTable(filtRecord);    

    }

}

