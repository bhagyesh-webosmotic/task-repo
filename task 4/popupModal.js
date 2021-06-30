///////////////////////////////MODAL/////////////////////////////////////////////
var viewModal = document.getElementById("viewModal");
var addModal = document.getElementById("addModal");
var span = document.getElementsByClassName("close")[0];

function viewModalFunc() {
  viewModal.style.display = "block";
}
function addModalFunc() {
  addModal.style.display = "block";
}
// When the user clicks on x of the modal, close it
span.onclick = function () {
  addModal.style.display = "none";
  viewModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == viewModal || event.target == addModal) {
    viewModal.style.display = "none";
    addModal.style.display = "none";
  }
};

function clickHandler(e) {
  var target = e.target;
  var fullText = target.parentNode.innerText;
  var day = fullText.substring(0, fullText.length - 5);
  var month = document.getElementById("months").value;
  var year = document.getElementById("selectedYear").value;
  var Info = (document.getElementById("addLabel").innerHTML = `${day}/${
    parseInt(month) + 1
  }/${year}`);
  // Retrieve
  document.getElementById("viewLabel").innerHTML = localStorage.getItem(Info);
}
