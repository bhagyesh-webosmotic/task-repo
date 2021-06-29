function removeFormData(e) {
  let dataArray = [];
  dataArray = JSON.parse(localStorage["jsonform"]);
  var rmId = e.target.id;
  console.log(rmId);
  dataArray.forEach((LSelement) => {
    if (rmId == LSelement.userId) {
      console.log("matched data for deletion");
      const index = dataArray.indexOf(LSelement);
      console.log(index);
      dataArray.splice(index, 1);
    } else {
      console.log("no data found");
    }
  });
  localStorage["jsonform"] = JSON.stringify(dataArray);
  displayFormInfo();
}
