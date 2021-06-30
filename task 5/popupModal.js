///////////////////////////////MODAL/////////////////////////////////////////////
var viewModal = document.getElementById("viewModal");
var addModal = document.getElementById("addModal");
// var viewBtn = document.getElementById(`viewBtn${i}-${j}`);
// var addBtn = document.getElementById(`addBtn${i}-${j}`);
var span = document.getElementsByClassName("close")[0];

function viewModalFunc() {
  viewModal.style.display = "block";
}
function addModalFunc() {
  addModal.style.display = "block";
}

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

/////////////////////////////////EVENT INFO TABLE//////////////////////////////
function clickHandler(e) {
  document.getElementById("infoTable").innerHTML = "";
  var target = e.target;
  var fullText = target.parentNode.innerText;
  var day = fullText.substring(0, fullText.length - 5);
  var month = document.getElementById("months").value;
  var year = document.getElementById("selectedYear").value;
  var Info = (document.getElementById("addLabel").innerHTML = `${day}/${
    parseInt(month) + 1
  }/${year}`);
  var dataObject = [];
  if (
    localStorage.getItem(document.getElementById("addLabel").innerHTML) &&
    localStorage.getItem(document.getElementById("addLabel").innerHTML).length >
      0
  ) {
    dataObject = JSON.parse(
      localStorage.getItem(document.getElementById("addLabel").innerHTML)
    );
    document.getElementById("viewLabel").innerHTML = Info;

    for (i = 0; i < dataObject.length; i++) {
      //tr will print event number of times
      var x = document.createElement("TR");
      x.setAttribute("id", `myTr${i}`);
      document.getElementById("infoTable").appendChild(x);
      for (j = 1; j <= 2; j++) {
        //td will print 2 times
        var td = document.createElement("TD");
        td.setAttribute("id", `evntinfoTd${i}-${j}`);
        td.setAttribute("value", j);
        if (j == 2) {
          var dltInfoBtn = document.createElement("button");
          dltInfoBtn.setAttribute("id", `dltInfoBtn${i}-${j}`);
          dltInfoBtn.setAttribute("value", `${i}`);
          dltInfoBtn.setAttribute("onclick", "dltInfo(event);");
          dltInfoBtn.innerHTML = "Delete";
          td.appendChild(dltInfoBtn);
        } else {
          objValArr = Object.values(dataObject[i]);
          var eventInfo = document.createTextNode(objValArr);
          td.appendChild(eventInfo);
        }
        x.appendChild(td);
      }
    }
  }
}
