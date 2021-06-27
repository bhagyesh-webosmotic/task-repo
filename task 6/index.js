//buttons
var addBtn = document.getElementById("add");
var addFormDiv = document.querySelector(".addForm");

//form fields:
var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");

var address = document.getElementById("address");
var phone = document.getElementById("phone");

//address book display
var addBookdiv = document.querySelector(".addbook");
var editBtn = document.querySelector(".edit");

//Intialize storage array
var dataArray = [];
var randomNumber = uuidv4();
//eventListeners
addBtn.addEventListener("click", addToBook);
addBookdiv.addEventListener("click", removeContact);
addBookdiv.addEventListener("click", editContact);

function structure(firstname, lastname, gender, address, phone, randomNumber) {
 this.firstname = firstname;
 this.lastname = lastname;
 this.gender = gender;
 this.address = address;
 this.phone = phone;
 this.randomNumber = randomNumber;
}

function addToBook() {
 //test if fields are empty
 var testIfempty =
  firstname.value != "" && lastname.value != "" && address.value != "" && phone.value != "";
 //console.log(testIfempty);

 var hiddenValue = document.getElementById("hidden").value;
 dataArray = JSON.parse(localStorage["contactInfo"]);

 if (hiddenValue) {
  console.log("inside matched data");
  for (var i in dataArray) {
   if (hiddenValue == dataArray[i].randomNumber) {
    if (testIfempty) {
     //add contents to array and add contents to localstorage
     var obj = new structure(
      firstname.value,
      lastname.value,
      gender,
      address.value,
      phone.value,
      randomNumber
     );
     dataArray.splice(i, 1, obj);
     localStorage["contactInfo"] = JSON.stringify(dataArray);

     //clear form
     clearForm();

     //update display from the form data collected
     displayContactInfo();
    } else {
     alert("fill data");
    }
   }
  }
 } else {
  console.log("inside new data");
  var gender = document.querySelector('input[name="gender"]:checked').value;
  console.log(gender);
  if (testIfempty) {
   //add contents to array and add contents to localstorage
   var obj = new structure(
    firstname.value,
    lastname.value,
    gender,
    address.value,
    phone.value,
    randomNumber
   );
   dataArray.push(obj);
   localStorage["contactInfo"] = JSON.stringify(dataArray);

   //clear form
   clearForm();

   //update display from the form data collected
   displayContactInfo();
  } else {
   alert("fill data");
  }
 }
 location.reload();
}

function clearForm() {
 var filledForm = document.querySelectorAll(".formFields");
 for (var i in filledForm) {
  filledForm[i].value = "";
 }
}

function removeContact(e) {
 if (e.target.classList.contains("removeButton")) {
  var rmId = e.target.getAttribute("data-id");
  dataArray.splice(rmId, 1);
  //update localstorage
  localStorage["contactInfo"] = JSON.stringify(dataArray);
  displayContactInfo();
 }
}

function editContact(e) {
 clearForm();
 if (e.target.classList.contains("editButton")) {
  var editId = e.target.getAttribute("id");
  for (var k in dataArray) {
   if (editId != dataArray[k].randomNumber) {
    console.log("no data matched to edit");
   } else {
    document.getElementById("firstname").value = dataArray[k].firstname;
    document.getElementById("lastname").value = dataArray[k].lastname;
    document.getElementById("address").value = dataArray[k].address;
    document.getElementById("phone").value = dataArray[k].phone;
    document.getElementById("hidden").value = dataArray[k].randomNumber;
    document.getElementById(dataArray[k].gender).checked = true;
    //  console.log(dataArray[k].firstname);
   }
  }
 }
}

function displayContactInfo() {
 //look for localstorage key if not present create it
 //if exists load content from LS and loop it on page for div to populate

 if (localStorage["contactInfo"] === undefined) {
  localStorage["contactInfo"] = "[]"; //string
 } else {
  dataArray = JSON.parse(localStorage["contactInfo"]);
  addBookdiv.innerHTML = "";
  for (var i in dataArray) {
   var str = '<div class="entry">';
   str += '<div class="entry-wrapper">';
   str += '<div class="firstname"><p>' + dataArray[i].firstname + "</p></div>";
   str += '<div class="lastname"><p>' + dataArray[i].lastname + "</p></div>";
   str += '<div class="gender"><p>' + dataArray[i].gender + "</p></div>";
   str += '<div class="address"><p>' + dataArray[i].address + "</p></div>";
   str += '<div class="phone"><p>' + dataArray[i].phone + "</p ></div>";
   str += '<input type="hidden" class="hidden" value="' + dataArray[i].randomNumber + '" ></input>';
   str += "</div >";
   str += '<div class="entry-element">';
   str +=
    '<div class="del"><a href="#" class="removeButton" id="' +
    dataArray[i].randomNumber +
    '" >Delete</a></div>';
   str +=
    '<div class="edit"><a href="#" class="editButton" id="' +
    dataArray[i].randomNumber +
    '" >Edit</a></div>';
   str += "</div >";
   str += "</div >";
   addBookdiv.innerHTML += str;
  }
 }
}

displayContactInfo();
