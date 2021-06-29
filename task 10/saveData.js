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

    dataArray.forEach((LSelement) => {
      if (document.querySelector(`[key="userId"]`).value == LSelement.userId) {
        console.log("matched data");
        const index = dataArray.indexOf(LSelement);
        dataArray.splice(index, 1);
      } else {
        console.log("about to inserting new data");
      }
    });

    console.log("inserting new data");
    elementsArray.forEach((element) => {
      if (
        element.type != "null" &&
        element.type != "submit" &&
        element.type != "reset" &&
        element.type != "radio" &&
        element.type != "checkbox"
      ) {
        //for saving DOM input fields values
        let value = document.querySelector(`[key="${element.key}"]`).value;
        obj[element.key] = value;
      } else if (
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
        obj[element.key] = dateDisplay(value);
      }
    });

    if (validate() == false) {
      location.reload();
    } else {
      dataArray.push(obj);
      localStorage["jsonform"] = JSON.stringify(dataArray);
    }
  }
  displayFormInfo();
  location.reload();
}
function getRandomNumber() {
  return randomNumber;
}
function dateDisplay(value) {
  // value is string
  let date = new Date(parseInt(value)); //converting value into number and passing it to DATE() function
  //date is object
  if (date == "Invalid Date") {
    return value;
  } else {
    let formatedDate = date.toString();
    // formatedDate is string
    return formatedDate;
  }
}
function validate() {
  let allAreFilled = true;
  document
    .getElementById("jsonForm")
    .querySelectorAll("[required]")
    .forEach(function (i) {
      if (!allAreFilled) return;
      if (!i.value) allAreFilled = false;
      if (i.type === "radio") {
        let radioValueCheck = false;
        document.getElementsByName("gender").forEach(function (r) {
          if (r.checked) radioValueCheck = true;
        });
        allAreFilled = radioValueCheck;
      }
    });
  if (!allAreFilled) {
    alert("Fill all the fields");
    return false;
  } else {
    return true;
  }
}
