///////////////////////////Remove Function/////////////////////

function removeInput(e) {
  var rmId = e.target.getAttribute("name");
  dataArray = JSON.parse(localStorage["input"]);
  dataArray.splice(rmId, 1);
  localStorage["input"] = JSON.stringify(dataArray);
  displayContactInfo();
}
