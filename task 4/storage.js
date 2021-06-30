///////////////////////LOCAL STORAGE///////////////////////////////////
function addInfo() {
  if (typeof Storage !== "undefined") {
    // Store
    localStorage.setItem(
      document.getElementById("addLabel").innerHTML,
      document.getElementById("addInfo").value
    );
    addModal.style.display = "none";
  } else {
    document.getElementById("result").innerHTML =
      "Sorry, your browser does not support Web Storage...";
  }
  document.getElementById("addInfo").value = "";
}
function dltInfo() {
  localStorage.removeItem(document.getElementById("addLabel").innerHTML);
  viewModal.style.display = "none";
}
