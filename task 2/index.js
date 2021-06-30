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
  document.getElementById("calDiv").classList.toggle("calender");
}
//for viewving which dates was clicked//
function clickHandler(e) {
  var target = e.target;
  if (e.target.nodeName == "LI") {
    document.getElementById("text").value = target.innerHTML;
  }
}
//for redering dates on calender on initial load//
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

  //  console.log(`fullDate ${fullDate}`);
  //  console.log(` month ${month}`);
  //  console.log(` year ${year}`);
  //  console.log(` daysinmonth ${daysInMonth}`);
  //  console.log(`firstday is ${firstDay.getDay()}`);
  document.querySelector(".days").innerHTML = "";
  var iterator = 0;
  var i;
  if (firstDay.getDay() == 0) {
    i = 1;
  } else if (firstDay.getDay() == 1) {
    i = 0;
  } else if (firstDay.getDay() == 2) {
    i = -1;
  } else if (firstDay.getDay() == 3) {
    i = -2;
  } else if (firstDay.getDay() == 4) {
    i = -3;
  } else if (firstDay.getDay() == 5) {
    i = -4;
  } else if (firstDay.getDay() == 6) {
    i = -5;
  }

  for (i; i <= daysInMonth; i++) {
    x = document.createElement("LI");
    if (i <= 0) {
      document.querySelector(".days").appendChild(x);
    } else {
      var t = document.createTextNode(iterator + i);
      x.appendChild(t);
      document.querySelector(".days").appendChild(x);
    }
  }
}
