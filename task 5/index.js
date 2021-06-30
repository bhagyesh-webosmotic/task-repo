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

//for rendering days name on table
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
  //for rendering days name on table
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
  //for rendering days count on table
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
  //  console.log(`placed ${placed}`);
}
