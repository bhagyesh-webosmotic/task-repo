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
