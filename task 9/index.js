var table = document.getElementById("fieldsTable");
var dataArray = [];

function clearForm() {
  var filledForm = document.querySelectorAll(".formFields");
  for (var i in filledForm) {
    filledForm[i].value = "";
  }
}

//////////////////////////Display Function////////////////////////

function displayContactInfo() {
  if (localStorage["input"] === undefined) {
    localStorage["input"] = "[]"; //string
  } else {
    dataArray = JSON.parse(localStorage["input"]);
    table.innerHTML = "";
    for (var i in dataArray) {
      var tr = document.createElement("TR");
      tr.setAttribute("id", `myTr${i}`);
      table.appendChild(tr);
      for (j = 0; j <= 3; j++) {
        var td = document.createElement("TD");
        td.setAttribute("id", `myTd${i}-${j}`);
        td.setAttribute("value", j);
        switch (j) {
          case 0:
            var id = document.createElement("p");
            // id.setAttribute("id", dataArray[i].idName);
            var textNode = document.createTextNode(dataArray[i].idName); // Create a text node
            id.appendChild(textNode);
            td.appendChild(id);
            break;
          ////////////////////////////////////////////Input Field//////////////////////////////////////////////
          case 1:
            switch (dataArray[i].type) {
              case "range":
                var element = document.createElement("input");
                element.setAttribute("type", dataArray[i].type);
                element.setAttribute("value", dataArray[i].value);
                element.setAttribute("id", dataArray[i].idName);
                element.setAttribute("min", 0);
                element.setAttribute("max", 10);
                td.appendChild(element);
                break;

              default:
                var element = document.createElement("input");
                element.setAttribute("type", dataArray[i].type);
                element.setAttribute("value", dataArray[i].value);
                element.setAttribute("id", dataArray[i].idName);
                td.appendChild(element);
                break;
            }
            break;
          //////////////////////////////////////////////Save Button/////////////////////////////////////////
          case 2:
            var save = document.createElement("button");
            save.setAttribute("name", dataArray[i].idName);
            save.setAttribute("input-type", dataArray[i].type);
            save.setAttribute("onclick", "saveInput(event);");
            save.innerHTML = "save";
            td.appendChild(save);

            break;
          ////////////////////////////////////////////////////////////////////////////////
          case 3:
            var remove = document.createElement("button");
            remove.setAttribute("name", i);
            remove.setAttribute("onclick", "removeInput(event);");
            remove.innerHTML = "Remove";
            td.appendChild(remove);
            break;
        }
        tr.appendChild(td);
      }
    }
  }
}
displayContactInfo();
