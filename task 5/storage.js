///////////////////////LOCAL STORAGE///////////////////////////////////
function addInfo() {
  var dataObject = [];
  // Check browser support
  if (typeof Storage !== "undefined") {
    if (
      localStorage.getItem(document.getElementById("addLabel").innerHTML) &&
      localStorage.getItem(document.getElementById("addLabel").innerHTML)
        .length > 0
    )
      dataObject = JSON.parse(
        localStorage.getItem(document.getElementById("addLabel").innerHTML)
      );
    Obj = {
      event: document.getElementById("addInfo").value,
    };

    dataObject.push(Obj);
    localStorage.setItem(
      document.getElementById("addLabel").innerHTML,
      JSON.stringify(dataObject)
    );

    document.getElementById("addInfo").value = "";
    addModal.style.display = "none";
  } else {
    document.getElementById("result").innerHTML =
      "Sorry, your browser does not support Web Storage...";
  }
}
function dltInfo(e) {
  var dataObject = [];
  dataObject = JSON.parse(
    localStorage.getItem(document.getElementById("addLabel").innerHTML)
  );
  dataObject.splice(e.target.value, 1);
  if (dataObject.length == 0) {
    localStorage.removeItem(document.getElementById("addLabel").innerHTML);
  } else {
    localStorage.setItem(
      document.getElementById("addLabel").innerHTML,
      JSON.stringify(dataObject)
    );
  }
  viewModal.style.display = "none";
}
