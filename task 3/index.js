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
//for button which toggles calender//
document.getElementById("btn").addEventListener("click", myFunction);
function myFunction() {
  document.getElementById("myTable").classList.toggle("calender");
}
//for viewving which dates was clicked//
function clickHandler(e) {
  var target = e.target;
  if (e.target.nodeName == "TD") {
    document.getElementById("text").value = target.innerHTML;
  }
}

//for redering dates on calender
var count = 0;
function myFunc() {
  if (count == 0) {
    console.clear();
    var fullDate = new Date();
    var year = fullDate.getFullYear();
    var month = fullDate.getMonth();
    var daysInMonth = new Date(year, month + 1, 0).getDate();
    var firstDay = new Date(fullDate.getFullYear(), fullDate.getMonth(), 1);
    count++;
  } else {
    console.clear();
    var year = document.getElementById("selectedYear").value;
    var month = document.getElementById("months").value;
    var daysInMonth = new Date(year, parseInt(month) + 1, 0).getDate();
    var firstDay = new Date(year, month, 1);
    var fullDate = new Date(year, month);
  }
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
      var y = document.createElement("TD");
      y.setAttribute("id", `myTd${j}`);
      y.setAttribute("value", j);
      if (firstDay.getDay() == j && placed == false) {
        var t = document.createTextNode(iterator);
        y.appendChild(t);
        document.getElementById(`myTr${i}`).appendChild(y);
        placed = true;
        iterator++;
      } else if (placed == true) {
        var t = document.createTextNode(iterator);
        y.appendChild(t);
        iterator++;
      }
      document.getElementById(`myTr${i}`).appendChild(y);
    }
  }
  console.log(`placed ${placed}`);
}
