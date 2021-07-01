var myTarget = document.getElementById("contextMenu");
myTarget.appendChild(renderList(myJSON));
function renderList(obj) {
  var result = document.createElement("ul");
  obj.forEach((element) => {
    var list = document.createElement("li");
    if (element.separator) {
      list.classList.add("separator");
    } else {
      var icon = document.createElement("i");
      icon.className = element.icon;
      var textnode = document.createTextNode(element.label);
      list.appendChild(icon);
      list.appendChild(textnode);
      list.onclick = element.command;
      if (element.items) {
        list.appendChild(renderList(element.items));
      }
    }
    result.appendChild(list);
  });
  return result;
}
