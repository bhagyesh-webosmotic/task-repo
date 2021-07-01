////////////////////////Save Function////////////////////////

function saveInput(e) {
  if (localStorage["input"] === undefined) {
    localStorage["input"] = "[]"; //string
  } else {
    var dataArray = [];
    var inputCurrValue = document.getElementById(e.target.name).value;
    dataArray = JSON.parse(localStorage["input"]);

    function structure(idName, type, value) {
      this.idName = idName;
      this.type = type;
      this.value = value;
    }

    var obj = new structure(
      e.target.name,
      e.target.getAttribute("input-type"),
      inputCurrValue
    );

    dataArray.forEach((element) => {
      if (element.idName == e.target.name) {
        console.log("matched");
        const index = dataArray.indexOf(element);
        console.log(index);
        dataArray.splice(index, 1);
      }
    });
    dataArray.push(obj);
    localStorage["input"] = JSON.stringify(dataArray);
  }
}
