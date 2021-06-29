function displayFormInfo() {
  let table = document.getElementById("jsonTable");

  if (localStorage["jsonform"] === undefined) {
    localStorage["jsonform"] = "[]";
  } else {
    let dataArray = [];
    dataArray = JSON.parse(localStorage["jsonform"]);
    table.innerHTML = "";
    if (dataArray.length > 0) {
      for (i = -1; i <= dataArray.length - 1; i++) {
        let tr = document.createElement("TR");
        tr.setAttribute("id", `myTr${i}`);
        table.appendChild(tr);
        if (i == -1) {
          let objectLenght = Object.keys(dataArray[0]).length;
          let objectKey = Object.keys(dataArray[0]); //ith object key [from array]
          for (k = 0; k < objectLenght; k++) {
            let td = document.createElement("TH");
            td.setAttribute("id", `myTd${i}-title`);
            td.setAttribute("value", i);
            let txtNode = document.createTextNode(objectKey[k]);
            td.appendChild(txtNode);
            tr.appendChild(td);
          }
        } else {
          let objectLenght = Object.keys(dataArray[i]).length;
          let objectValue = Object.values(dataArray[i]);
          //  console.log(objectLenght); //ith object lenght
          //  console.log(objectValue); //ith object value [from array]
          for (j = 0; j < objectLenght + 2; j++) {
            let td = document.createElement("TD");
            td.setAttribute("id", `myTd${i}-${j}`);
            td.setAttribute("value", j);
            if (j == objectLenght && j < objectLenght + 1) {
              let editBtn = document.createElement("BUTTON");
              editBtn.setAttribute("id", objectValue[0]);
              editBtn.setAttribute("input-type", "button");
              editBtn.setAttribute("onclick", "editFormData(event);");
              editBtn.innerHTML = "Edit";
              td.appendChild(editBtn);
            } else if (j > objectLenght && j == objectLenght + 1) {
              let dltBtn = document.createElement("BUTTON");
              dltBtn.setAttribute("id", objectValue[0]);
              dltBtn.setAttribute("input-type", "button");
              dltBtn.setAttribute("onclick", "removeFormData(event);");
              dltBtn.innerHTML = "Delete";
              td.appendChild(dltBtn);
            } else {
              let txtNode = document.createTextNode(objectValue[j]);
              td.appendChild(txtNode);
            }
            tr.appendChild(td);
          }
        }
      }
    }
  }
}
