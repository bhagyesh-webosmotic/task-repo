//For saving data
function saveFormData(e) {
  e.preventDefault();
  if (localStorage["jsonform"] === undefined) {
    localStorage["jsonform"] = "[]";
  } else {
    let dataArray = [];
    dataArray = JSON.parse(localStorage["jsonform"]);
    let obj = {};
    let chkboxArr = [];

    dataArray.forEach((lsElement) => {
      //for finding the index of existing data and deleting it from localstorage
      if (document.querySelector(`[key="userId"]`).value == lsElement.userId) {
        const index = dataArray.indexOf(lsElement);
        dataArray.splice(index, 1);
      }
    });

    elementsArray.forEach((element) => {
      switch (element.type) {
        case "radio":
          let ele = document.getElementsByName("gender");
          for (i = 0; i < ele.length; i++) {
            if (ele[i].checked) {
              obj[element.key] = ele[i].value;
            }
          }
          break;
        case "checkbox":
          let chkbxln = document.querySelectorAll(`[key="${element.key}"]`);
          for (i = 0; i < chkbxln.length; i++) {
            if (chkbxln[i].checked) {
              chkboxArr.push(chkbxln[i].value);
            }
          }
          obj[element.key] = chkboxArr;
          break;
        case "null":
          if (element.key == "userId") {
            //for saving unique id
            obj[element.key] = getRandomNumber();
          } else if (element.key == "createdAt") {
            //for saving time-stamp
            let value = document.querySelector(`[key="${element.key}"]`).value;
            obj[element.key] = dateDisplay(value);
          }
          break;
        case "submit": //do nothing for submit
          break;
        case "reset": //do nothing for reset
          break;
        default:
          //for saving DOM input fields values
          let value = document.querySelector(`[key="${element.key}"]`).value;
          obj[element.key] = value;
          break;
      }
    });

    if (validate() == false) {
      location.reload();
    } else {
      dataArray.push(obj);
      localStorage["jsonform"] = JSON.stringify(dataArray);
    }
  }
  fetchData();
  //   location.reload();
}

function getRandomNumber() {
  let randomNumber = uuidv4();
  return randomNumber;
}

function dateDisplay(value) {
  let date = new Date(parseInt(value)); //converting value into number and passing it to DATE() function
  if (date == "Invalid Date") {
    return value;
  } else {
    let formatedDate = date.toString();
    return formatedDate;
  }
}

//for validating empty form fields
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

//For updating stored data
function editFormData(e) {
  let dataArray = [];
  dataArray = JSON.parse(localStorage["jsonform"]);
  editId = e.target.id;
  dataArray.forEach((lsElement) => {
    if (lsElement.userId == editId) {
      elementsArray.forEach((JSONelement) => {
        let key = JSONelement.key;
        switch (JSONelement.type) {
          case "radio":
            //for retriving radio value
            let ele = document.getElementsByName("gender");
            for (i = 0; i < ele.length; i++) {
              if (ele[i].value == lsElement[key]) {
                ele[i].checked = true;
              }
            }
            break;
          case "checkbox":
            //for retriving checkbox values
            let chkbxln = document.querySelectorAll(
              `[key="${JSONelement.key}"]`
            );
            let k = 0;
            for (i = 0; i < chkbxln.length; i++) {
              if (chkbxln[i].value == lsElement[key][k]) {
                chkbxln[i].checked = true;
                k++;
              }
            }
            break;
          case "null":
            //for retriving null values
            if (JSONelement.key == "userId") {
              document.querySelector(`[key="${JSONelement.key}"]`).value =
                lsElement[key];
            } else {
              document.querySelector(`[key="${JSONelement.key}"]`).value =
                lsElement[key];
            }
            break;
          case "submit": //do nothing for submit
            break;
          case "reset": //do nothing for reset
            break;
          default:
            //retriving DOM input fields values from localstorage
            document.querySelector(`[key="${JSONelement.key}"]`).value =
              lsElement[key];
            break;
        }
      });
    }
  });
}

//For deleting stored data
function removeFormData(e) {
  let dataArray = [];
  dataArray = JSON.parse(localStorage["jsonform"]);
  let rmId = e.target.id;
  dataArray.forEach((lsElement) => {
    if (rmId == lsElement.userId) {
      console.log("matched data for deletion");
      const index = dataArray.indexOf(lsElement);
      dataArray.splice(index, 1);
    } else {
      console.log("no data found");
    }
  });
  localStorage["jsonform"] = JSON.stringify(dataArray);
  fetchData();
}
