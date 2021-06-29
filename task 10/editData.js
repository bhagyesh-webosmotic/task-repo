function editFormData(e) {
  if (localStorage["jsonform"] === undefined) {
    localStorage["jsonform"] = "[]";
  } else {
    let dataArray = [];
    dataArray = JSON.parse(localStorage["jsonform"]);
    elementsArray.forEach((element) => {
      let value = document.querySelector(`[key="${element.key}"]`).value;
      obj[element.key] = value;
    });
  }
}
