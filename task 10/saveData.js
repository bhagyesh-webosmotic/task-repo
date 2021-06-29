var randomNumber = uuidv4();
function saveFormData(e) {
  e.preventDefault();
  if (localStorage["jsonform"] === undefined) {
    localStorage["jsonform"] = "[]";
  } else {
    let dataArray = [];
    dataArray = JSON.parse(localStorage["jsonform"]);
    let obj = {};
    let chkboxArr = [];

    elementsArray.forEach((element) => {
      if (
        element.type != "submit" &&
        element.type != "reset" &&
        element.type != "radio" &&
        element.type != "checkbox"
      ) {
        //for saving DOM input fields values
        let value = document.querySelector(`[key="${element.key}"]`).value;
        obj[element.key] = value;
      } else {
        if (
          //for saving radio value
          element.type == "radio" &&
          element.type != "submit" &&
          element.type != "reset"
        ) {
          let ele = document.getElementsByName("gender");
          for (i = 0; i < ele.length; i++) {
            if (ele[i].checked) {
              obj[element.key] = ele[i].value;
            }
          }
        } else if (
          //for saving checkbox values
          element.type == "checkbox" &&
          element.type != "submit" &&
          element.type != "reset"
        ) {
          //   console.log(document.querySelectorAll(`[key="${element.key}"]`));
          let chkbxln = document.querySelectorAll(`[key="${element.key}"]`);
          for (i = 0; i < chkbxln.length; i++) {
            if (chkbxln[i].checked) {
              chkboxArr.push(chkbxln[i].value);
            }
          }
          obj[element.key] = chkboxArr;
        } else if (element.type == "null" && element.key == "userId") {
          obj[element.key] = getRandomNumber();
        } else if (element.type == "null" && element.key == "createdAt") {
          var value = document.querySelector(`[key="${element.key}"]`).value;
          console.log(value);
          obj[element.key] = dateDisplay(value);
        }
      }
    });
    dataArray.push(obj);
    localStorage["jsonform"] = JSON.stringify(dataArray);
  }
  displayFormInfo();
}
function getRandomNumber() {
  return randomNumber;
}
function dateDisplay(value) {
  console.log(value);
  let date = new Date(parseInt(value));
  return date.toString();
}
