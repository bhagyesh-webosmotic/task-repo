myFunc();
//for auto selecting month on the month dropdown list
function autoSelectMonth() {
 document.getElementById("months").value = new Date().getMonth();
}
//for select year dropdown//
var currentYear = new Date().getFullYear(),
 maxYear = currentYear + 9;
select = document.getElementById("selectedYear");

for (var i = currentYear; i <= maxYear; i++) {
 var opt = document.createElement("option");
 opt.value = i;
 opt.innerHTML = i;
 select.appendChild(opt);
}
////////////////////////////////////////INIT FUNC//////////////////////////////////////
function myFunc() {
 console.clear();
 var fullDate = new Date();
 var year = fullDate.getFullYear();
 var month = fullDate.getMonth();
 var daysInMonth = new Date(year, month + 1, 0).getDate();
 var firstDay = new Date(fullDate.getFullYear(), fullDate.getMonth(), 1);
 console.log(`fullDate ${fullDate}`);
 console.log(` month ${month}`);
 console.log(` year ${year}`);
 console.log(` daysinmonth ${daysInMonth}`);
 console.log(`firstday is ${firstDay.getDay()}`);
 var iterator = 1;
 var placed = false;
 for (i = 0; i <= 4; i++) {
  //tr will print 5 times
  var x = document.createElement("TR");
  x.setAttribute("id", `myTr${i}`);
  document.getElementById("myTable").appendChild(x);
  for (j = 0; j <= 6 && iterator <= daysInMonth; j++) {
   //td will print 7 times
   var addButton = document.createElement("button");
   addButton.setAttribute("id", `addBtn${i}-${j}`);
   addButton.setAttribute("onclick", "addModalFunc();");
   addButton.innerHTML = "+";
   var viewButton = document.createElement("button");
   viewButton.setAttribute("id", `viewBtn${i}-${j}`);
   viewButton.setAttribute("onclick", "viewModalFunc();");
   viewButton.innerHTML = "view";
   var td = document.createElement("TD");
   td.setAttribute("id", `myTd${i}-${j}`);
   td.setAttribute("value", j);
   if (firstDay.getDay() == j && placed == false) {
    var dayCount = document.createTextNode(iterator);
    td.appendChild(dayCount);
    document.getElementById(`myTr${i}`).appendChild(td);
    document.getElementById(`myTd${i}-${j}`).appendChild(addButton);
    document.getElementById(`myTd${i}-${j}`).appendChild(viewButton);
    placed = true;
    iterator++;
   } else if (placed == true) {
    var dayCount = document.createTextNode(iterator);
    td.appendChild(dayCount);
    td.appendChild(addButton);
    td.appendChild(viewButton);
    iterator++;
   }
   document.getElementById(`myTr${i}`).appendChild(td);
  }
 }
 console.log(`placed ${placed}`);
}

/////////////////////////////////////DROPDOWN SELECT FUNCTION///////////////////////
function myFunc2() {
 console.clear();
 var year = document.getElementById("selectedYear").value;
 var month = document.getElementById("months").value;
 var daysInMonth = new Date(year, parseInt(month) + 1, 0).getDate();
 var firstDay = new Date(year, month, 1);
 var fullDate = new Date(year, month);
 console.log("dropdown triggered");
 console.log(`fullDate ${fullDate}`);
 console.log(`month ${document.getElementById("months").value}`);
 console.log(`year ${document.getElementById("selectedYear").value}`);
 console.log(`daysinmonth ${daysInMonth}`);
 console.log(`firstday is ${firstDay.getDay()}`);
 var iterator = 1;
 var placed = false;
 var day = 0;
 document.getElementById("myTable").innerHTML = ""; //clears prev data
 var x = document.createElement("TR");
 x.setAttribute("id", "myTrDays");
 document.getElementById("myTable").appendChild(x);
 for (k = 0; k <= 6; k++) {
  //td will print 7 times for days row
  var y = document.createElement("TD");
  switch (day) {
   case 0:
    var t = document.createTextNode("Sun");
    break;
   case 1:
    var t = document.createTextNode("Mon");
    break;
   case 2:
    var t = document.createTextNode("Tue");
    break;
   case 3:
    var t = document.createTextNode("Wed");
    break;
   case 4:
    var t = document.createTextNode("Thu");
    break;
   case 5:
    var t = document.createTextNode("Fri");
    break;
   case 6:
    var t = document.createTextNode("Sat");
    break;
  }
  y.appendChild(t);
  document.getElementById("myTrDays").appendChild(y);
  day++;
 }
 for (i = 0; i <= 5; i++) {
  //tr will print 6 times
  var x = document.createElement("TR");
  x.setAttribute("id", `myTr${i}`);
  document.getElementById("myTable").appendChild(x);
  for (j = 0; j <= 6 && iterator <= daysInMonth; j++) {
   //td will print 7 times
   var addButton = document.createElement("button");
   addButton.setAttribute("id", `addBtn${i}-${j}`);
   addButton.setAttribute("onclick", "addModalFunc();");
   addButton.innerHTML = "+";
   var viewButton = document.createElement("button");
   viewButton.setAttribute("id", `viewBtn${i}-${j}`);
   viewButton.setAttribute("onclick", "viewModalFunc();");
   viewButton.innerHTML = "view";
   var td = document.createElement("TD");
   td.setAttribute("id", `myTd${i}-${j}`);
   td.setAttribute("value", j);
   if (firstDay.getDay() == j && placed == false) {
    var dayCount = document.createTextNode(iterator);
    td.appendChild(dayCount);
    document.getElementById(`myTr${i}`).appendChild(td);
    document.getElementById(`myTd${i}-${j}`).appendChild(addButton);
    document.getElementById(`myTd${i}-${j}`).appendChild(viewButton);
    placed = true;
    iterator++;
   } else if (placed == true) {
    var dayCount = document.createTextNode(iterator);
    td.appendChild(dayCount);
    td.appendChild(addButton);
    td.appendChild(viewButton);
    iterator++;
   }
   document.getElementById("myTr" + i + "").appendChild(td);
  }
 }
 console.log(`placed ${placed}`);
}

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
