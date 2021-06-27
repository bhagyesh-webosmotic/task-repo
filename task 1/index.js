document.getElementById("btn").addEventListener("click", myFunction);
function myFunction() {
 //   alert("hello");
 document.getElementById("calDiv").classList.toggle("calender");
}
function clickHandler(e) {
 var target = e.target;
 if (e.target.nodeName == "LI") {
  document.getElementById("text").value = target.innerHTML;
 }
}
