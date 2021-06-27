var table = document.getElementById("fieldsTable");
var dataArray = [];
function add(idName, type) {
  if (idName) {
    var tr = document.createElement("TR");
    tr.setAttribute("id", `tr${idName}`);
    table.appendChild(tr);

    var td1 = document.createElement("TD");
    td1.setAttribute("id", `td${idName}`);
    td1.setAttribute("value", idName);

    var id = document.createElement("p");
    var textNode = document.createTextNode(idName); // Create a text node
    id.appendChild(textNode);
    td1.appendChild(id);
    //////////////////////////Input Field////////////////////////////

    var td2 = document.createElement("TD");
    td2.setAttribute("id", `td${idName}`);
    td2.setAttribute("value", idName);
    switch (type) {
      case "range":
        var element = document.createElement("input");
        element.setAttribute("type", type);
        element.setAttribute("value", 5);
        element.setAttribute("id", idName);
        element.setAttribute("min", 0);
        element.setAttribute("max", 10);
        td2.appendChild(element);
        break;

      default:
        var element = document.createElement("input");
        element.setAttribute("type", type);
        element.setAttribute("value", idName);
        element.setAttribute("id", idName);
        td2.appendChild(element);
        break;
    }

    ////////////////////////////////Save Button//////////////////////////////////////

    var td3 = document.createElement("TD");
    td3.setAttribute("id", `td${idName}`);
    td3.setAttribute("value", idName);

    var save = document.createElement("button");
    save.setAttribute("name", idName);
    save.setAttribute("input-type", type);
    save.setAttribute("onclick", "saveInput(event);");
    save.innerHTML = "save";
    td3.appendChild(save);

    ////////////////////////////////////////////////////////////////

    var td4 = document.createElement("TD");
    td4.setAttribute("id", `td${idName}`);
    td4.setAttribute("value", idName);

    var remove = document.createElement("button");
    remove.setAttribute("name", idName);
    remove.setAttribute("onclick", "location.reload();");
    remove.innerHTML = "Remove";
    td4.appendChild(remove);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    clearForm();
  }
}

function clearForm() {
  var filledForm = document.querySelectorAll(".formFields");
  for (var i in filledForm) {
    filledForm[i].value = "";
  }
}

///////////////////////////Remove Function/////////////////////

function removeInput(e) {
  var rmId = e.target.getAttribute("name");
  dataArray = JSON.parse(localStorage["input"]);
  dataArray.splice(rmId, 1);
  localStorage["input"] = JSON.stringify(dataArray);
  displayContactInfo();
}

////////////////////////Save Function////////////////////////

function saveInput(e) {
  if (localStorage["input"] === undefined) {
    localStorage["input"] = "[]"; //string
  } else {
    var dataArray = [];
    var inputCurrValue = document.getElementById(e.target.name).value;
    dataArray = JSON.parse(localStorage["input"]);

    function structure(idName, type, value) {
      this.idName = idName;
      this.type = type;
      this.value = value;
    }

    var obj = new structure(
      e.target.name,
      e.target.getAttribute("input-type"),
      inputCurrValue
    );

    dataArray.forEach((element) => {
      if (element.idName == e.target.name) {
        console.log("matched");
        const index = dataArray.indexOf(element);
        console.log(index);
        dataArray.splice(index, 1);
      }
    });
    dataArray.push(obj);
    localStorage["input"] = JSON.stringify(dataArray);
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
