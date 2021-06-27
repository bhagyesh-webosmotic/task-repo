let elementsArray = [
 {
  type: "null",
  key: "userId",
  label: "User Id",
  unique: true,
  getValue: function (elementsArray, obj) {
   return getRandomNumber();
  },
 },
 {
  type: "null",
  key: "createdAt",
  label: "Created At",
  getValue: function () {
   return new Date().getTime();
  },
 },
 {
  type: "text",
  label: "Name",
  key: "name",
  value: "",
  attr: {
   id: "txtName",
   className: "textInput",
   placeholder: "Enter name",
   name: "txtName",
   required: true,
   onchange: function (e) {},
  },
 },
 {
  type: "email",
  label: "Email",
  key: "email",
  value: "",
  attr: {
   id: "txtEmail",
   className: "textInput",
   placeholder: "Enter email",
   name: "txtName",
   required: true,
   onchange: function (e) {},
  },
 },
 {
  type: "tel",
  label: "Phone",
  key: "phone",
  value: "",
  attr: {
   id: "txtPhone",
   className: "textInput",
   placeholder: "Enter phone number",
   name: "txtName",
   required: true,
   onchange: function (e) {},
  },
 },
 {
  type: "textarea",
  label: "Address",
  key: "address",
  value: "",
  attr: {
   id: "txtAddress",
   className: "textInput",
   placeholder: "Enter Address",
   rows: "5",
   name: "txtName",
   required: true,
   onchange: function (e) {},
  },
 },
 {
  type: "text",
  label: "Street Address",
  key: "street_address",
  value: "",
  attr: {
   id: "txtStreet",
   className: "textInput",
   placeholder: "Enter Street Address",
   name: "txtName",
   required: true,
   onchange: function (e) {},
  },
 },
 {
  type: "text",
  label: "City",
  key: "city",
  value: "",
  attr: {
   id: "txtCity",
   className: "textInput",
   placeholder: "Enter City",
   name: "txtName",
   required: true,
   onchange: function (e) {},
  },
 },
 {
  type: "text",
  label: "State",
  key: "state",
  value: "",
  attr: {
   id: "txtState",
   className: "textInput",
   placeholder: "Enter State",
   name: "txtName",
   required: true,
   onchange: function (e) {},
  },
 },
 {
  type: "number",
  label: "Pin Code",
  key: "pin_code",
  value: "",
  attr: {
   id: "txtPincode",
   className: "textInput",
   placeholder: "Enter Pin Code",
   name: "txtName",
   required: true,
   onchange: function (e) {},
  },
 },
 {
  type: "select",
  label: "Country",
  key: "country",
  value: "",
  attr: {
   id: "txtCountry",
   className: "columns",
   name: "country",
   required: true,
   onchange: function (e, d) {
    console.log(e, d);
   },
  },
  options: [
   {
    innerHTML: "Select Country",
    value: "select",
   },
   {
    innerHTML: "India",
    value: "india",
   },
   {
    innerHTML: "United States",
    value: "united-states",
   },
   {
    innerHTML: "Sri Lanka",
    value: "sri-lanka",
   },
  ],
 },
 {
  type: "radio",
  label: "Gender",
  key: "gender",
  value: "",
  options: [
   {
    innerHTML: "Male",
    value: "male",
    name: "gender",
    attr: {
     id: "male",
     className: "radioGender",
     required: true,
     onchange: function (e) {},
    },
   },
   {
    innerHTML: "Female",
    value: "female",
    name: "gender",
    attr: {
     id: "female",
     className: "radioGender",
     required: true,
     onchange: function (e) {},
    },
   },
  ],
 },
 {
  type: "checkbox",
  label: "Hobbies",
  key: "hobbies",
  value: "",
  options: [
   {
    innerHTML: "Swimming",
    value: "swimming",
    attr: {
     id: "swimming",
     className: "radioHobbies",
     onchange: function (e, d) {
      console.log(e, d);
     },
    },
   },
   {
    innerHTML: "Singing",
    value: "singing",
    attr: {
     id: "singing",
     className: "radioHobbies",
     onchange: function (e) {},
    },
   },
   {
    innerHTML: "Writing",
    value: "writing",
    attr: {
     id: "writing",
     className: "radioHobbies",
     onchange: function (e) {},
    },
   },
  ],
 },
 {
  type: "submit",
  attr: {
   id: "btnSubmit",
   name: "btnSubmit",
   className: "submit",
   value: "Submit",
   onclick: (e, obj, array, dataObjArray) => {
    // createNewTable(dataObjArray, array);
    console.log(e, obj, array, dataObjArray);

    if (
     array.filter(function (d) {
      if (d.type !== "submit" && d.type !== "null") {
       return validate(obj, d.errorMsg, d.errorElement, d.value, d.type);
      }
     }).length === 0
    ) {
     createNewTable(dataObjArray, array);
    }
   },
  },
 },
 {
  type: "reset",
  attr: {
   id: "btnReset",
   name: "btnReset",
   className: "reset",
   value: "Reset",
   onclick: (e, obj, array, dataObjArray) => {},
  },
 },
];

var myForm = document.getElementById("jsonForm");

function renderForm(obj) {
 obj.forEach((element) => {
  switch (element.type) {
   case "null":
    var input = document.createElement("input");
    input.setAttribute("type", element.type);
    input.setAttribute("key", element.key);
    input.setAttribute("label", element.label);
    if (element.unique) {
     input.setAttribute("unique", element.unique);
    }

    break;
   case "text":
    var input = document.createElement("input");
    input.setAttribute("type", element.type);
    input.setAttribute("key", element.key);
    input.setAttribute("value", element.value);
    input.setAttribute("id", element.attr.id);
    input.classList.add(element.attr.className);
    input.setAttribute("placeholder", element.attr.placeholder);
    input.setAttribute("name", element.attr.name);
    input.setAttribute("required", element.attr.required);
    input.onchange = element.attr.onchange;
    var label = document.createElement("label");
    label.classList.add("inputlabel");
    label.innerHTML = element.label;
    label.htmlFor = element.attr.id;
    myForm.appendChild(label);
    var lineBreak = document.createElement("br");
    myForm.appendChild(lineBreak);
    myForm.appendChild(input);
    var lineBreak = document.createElement("br");
    myForm.appendChild(lineBreak);
    break;
   case "email":
    var input = document.createElement("input");
    input.setAttribute("type", element.type);
    input.setAttribute("key", element.key);
    input.setAttribute("value", element.value);
    input.setAttribute("id", element.attr.id);
    input.classList.add(element.attr.className);
    input.setAttribute("placeholder", element.attr.placeholder);
    input.setAttribute("name", element.attr.name);
    input.setAttribute("required", element.attr.required);
    input.onchange = element.attr.onchange;
    var label = document.createElement("label");
    label.classList.add("inputlabel");
    label.innerHTML = element.label;
    label.htmlFor = element.attr.id;
    myForm.appendChild(label);
    var lineBreak = document.createElement("br");
    myForm.appendChild(lineBreak);
    myForm.appendChild(input);
    var lineBreak = document.createElement("br");
    myForm.appendChild(lineBreak);
    break;
   case "tel":
    var input = document.createElement("input");
    input.setAttribute("type", element.type);
    input.setAttribute("key", element.key);
    input.setAttribute("value", element.value);
    input.setAttribute("id", element.attr.id);
    input.classList.add(element.attr.className);
    input.setAttribute("placeholder", element.attr.placeholder);
    input.setAttribute("name", element.attr.name);
    input.setAttribute("required", element.attr.required);
    input.onchange = element.attr.onchange;
    var label = document.createElement("label");
    label.classList.add("inputlabel");
    label.innerHTML = element.label;
    label.htmlFor = element.attr.id;
    myForm.appendChild(label);
    var lineBreak = document.createElement("br");
    myForm.appendChild(lineBreak);
    myForm.appendChild(input);
    var lineBreak = document.createElement("br");
    myForm.appendChild(lineBreak);
    break;
   case "textarea":
    var input = document.createElement("textarea");
    input.setAttribute("type", element.type);
    input.setAttribute("key", element.key);
    input.setAttribute("value", element.value);
    input.setAttribute("id", element.attr.id);
    input.classList.add(element.attr.className);
    input.setAttribute("placeholder", element.attr.placeholder);
    input.setAttribute("rows", element.attr.rows);
    input.setAttribute("name", element.attr.name);
    input.setAttribute("required", element.attr.required);
    input.onchange = element.attr.onchange;
    var label = document.createElement("label");
    label.classList.add("inputlabel");
    label.innerHTML = element.label;
    label.htmlFor = element.attr.id;
    myForm.appendChild(label);
    var lineBreak = document.createElement("br");
    myForm.appendChild(lineBreak);
    myForm.appendChild(input);
    var lineBreak = document.createElement("br");
    myForm.appendChild(lineBreak);
    break;
   case "number":
    var input = document.createElement("input");
    input.setAttribute("type", element.type);
    input.setAttribute("key", element.key);
    input.setAttribute("value", element.value);
    input.setAttribute("id", element.attr.id);
    input.classList.add(element.attr.className);
    input.setAttribute("placeholder", element.attr.placeholder);
    input.setAttribute("name", element.attr.name);
    input.setAttribute("required", element.attr.required);
    input.onchange = element.attr.onchange;
    var label = document.createElement("label");
    label.classList.add("inputlabel");
    label.innerHTML = element.label;
    label.htmlFor = element.attr.id;
    myForm.appendChild(label);
    var lineBreak = document.createElement("br");
    myForm.appendChild(lineBreak);
    myForm.appendChild(input);
    var lineBreak = document.createElement("br");
    myForm.appendChild(lineBreak);
    break;
   case "select":
    var input = document.createElement("select");
    input.setAttribute("type", element.type);
    input.setAttribute("key", element.key);
    input.setAttribute("value", element.value);
    input.setAttribute("id", element.attr.id);
    input.classList.add(element.attr.className);
    input.setAttribute("name", element.attr.name);
    input.setAttribute("required", element.attr.required);
    input.onchange = element.attr.onchange;
    element.options.forEach((optnItr) => {
     var optn = document.createElement("option");
     optn.innerHTML = optnItr.innerHTML;
     optn.setAttribute("value", optnItr.value);
     input.appendChild(optn);
    });
    var label = document.createElement("label");
    label.classList.add("inputlabel");
    label.innerHTML = element.label;
    label.htmlFor = element.attr.id;
    myForm.appendChild(label);
    var lineBreak = document.createElement("br");
    myForm.appendChild(lineBreak);
    myForm.appendChild(input);
    var lineBreak = document.createElement("br");
    myForm.appendChild(lineBreak);
    break;
   case "radio":
    var label = document.createElement("label");
    label.classList.add("inputlabel");
    label.innerHTML = element.label;
    label.htmlFor = element.key;
    myForm.appendChild(label);
    var lineBreak = document.createElement("br");
    myForm.appendChild(lineBreak);
    element.options.forEach((optnItr) => {
     var input = document.createElement("input");
     input.setAttribute("type", element.type);
     input.setAttribute("key", element.key);
     input.innerHTML = optnItr.innerHTML;
     input.setAttribute("value", optnItr.value);
     input.setAttribute("name", optnItr.name);
     input.setAttribute("id", optnItr.attr.id);
     input.classList.add(optnItr.attr.className);
     input.setAttribute("required", optnItr.attr.required);
     input.onchange = optnItr.attr.onchange;
     myForm.appendChild(input);
     var optlabel = document.createElement("label");
     optlabel.classList.add("radiolabel");
     optlabel.innerHTML = optnItr.innerHTML;
     optlabel.htmlFor = optnItr.attr.id;
     myForm.appendChild(optlabel);
     var lineBreak = document.createElement("br");
     myForm.appendChild(lineBreak);
    });
    var lineBreak = document.createElement("br");
    myForm.appendChild(lineBreak);

    break;
   case "checkbox":
    var label = document.createElement("label");
    label.classList.add("inputlabel");
    label.innerHTML = element.label;
    label.htmlFor = element.key;
    myForm.appendChild(label);
    var lineBreak = document.createElement("br");
    myForm.appendChild(lineBreak);
    element.options.forEach((optnItr) => {
     var input = document.createElement("input");
     input.setAttribute("type", element.type);
     input.setAttribute("key", element.key);
     input.innerHTML = optnItr.innerHTML;
     input.setAttribute("value", optnItr.value);
     input.setAttribute("name", optnItr.name);
     input.setAttribute("id", optnItr.attr.id);
     input.onchange = optnItr.attr.onchange;
     input.classList.add(optnItr.attr.className);
     myForm.appendChild(input);
     var optlabel = document.createElement("label");
     optlabel.classList.add("checkboxlabel");
     optlabel.innerHTML = optnItr.innerHTML;
     optlabel.htmlFor = optnItr.attr.id;
     myForm.appendChild(optlabel);
     var lineBreak = document.createElement("br");
     myForm.appendChild(lineBreak);
    });
    var label = document.createElement("label");
    label.innerHTML = element.label;
    label.htmlFor = element.key;

    break;
   case "submit":
    var input = document.createElement("input");
    // input.setAttribute("type", element.type);
    input.setAttribute("type", "button");
    input.setAttribute("id", element.attr.id);
    input.setAttribute("name", element.attr.name);
    input.classList.add(element.attr.className);
    input.setAttribute("value", element.attr.value);
    input.onclick = element.attr.onclick;
    input.setAttribute("onclick", "saveFormData(event)");
    myForm.appendChild(input);
    var lineBreak = document.createElement("br");
    myForm.appendChild(lineBreak);
    break;
   case "reset":
    var input = document.createElement("input");
    input.setAttribute("type", element.type);
    input.setAttribute("id", element.attr.id);
    input.setAttribute("name", element.attr.name);
    input.classList.add(element.attr.className);
    input.setAttribute("value", element.attr.value);
    input.onclick = element.attr.onclick;
    myForm.appendChild(input);
    var lineBreak = document.createElement("br");
    myForm.appendChild(lineBreak);
    break;
  }
 });
}
renderForm(elementsArray);
displayFormInfo();

////////////////////////////////////////////////////////////////
///////////////////////////Remove Function/////////////////////

// function removeFormData(e) {
//   var rmId = e.target.getAttribute("name");
//   dataArray = JSON.parse(localStorage["input"]);
//   dataArray.splice(rmId, 1);
//   localStorage["input"] = JSON.stringify(dataArray);
//   displayFormInfo();
// }

////////////////////////Save Function////////////////////////

function saveFormData(e) {
 if (localStorage["jsonform"] === undefined) {
  localStorage["jsonform"] = "[]"; //string
 } else {
  var dataArray = [];
  dataArray = JSON.parse(localStorage["jsonform"]);
  var obj = {};
  var chkboxArr = [];

  elementsArray.forEach((element) => {
   if (
    element.attr &&
    element.type != "submit" &&
    element.type != "reset" &&
    element.type != "radio" &&
    element.type != "checkbox"
   ) {
    var value = document.getElementById(element.attr.id).value;
    obj[element.key] = value;
   } else {
    if (element.type == "radio" && element.type != "submit" && element.type != "reset") {
     var ele = document.getElementsByName("gender");
     for (i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
       obj[element.key] = ele[i].value;
      }
     }
    } else if (element.type == "checkbox" && element.type != "submit" && element.type != "reset") {
     var chkbox = document.getElementsByClassName("radioHobbies");
     for (i = 0; i < chkbox.length; i++) {
      if (chkbox[i].checked) {
       chkboxArr.push(chkbox[i].value);
      }
     }
     obj[element.key] = chkboxArr;
    }
   }
  });
  console.log(obj);
  dataArray.push(obj);
  localStorage["jsonform"] = JSON.stringify(dataArray);
 }
 displayFormInfo();
}

//////////////////////////Display Function////////////////////////

function displayFormInfo() {
 var table = document.getElementById("jsonTable");

 if (localStorage["jsonform"] === undefined) {
  localStorage["jsonform"] = "[]";
 } else {
  var dataArray = [];
  dataArray = JSON.parse(localStorage["jsonform"]);
  table.innerHTML = "";
  if (dataArray.length > 0) {
   for (i = -1; i <= dataArray.length - 1; i++) {
    var tr = document.createElement("TR");
    tr.setAttribute("id", `myTr${i}`);
    table.appendChild(tr);
    if (i == -1) {
     var objectLenght = Object.keys(dataArray[0]).length;
     var objectKey = Object.keys(dataArray[0]); //ith object key [from array]
     for (k = 0; k < objectLenght; k++) {
      var td = document.createElement("TH");
      td.setAttribute("id", `myTd${i}-title`);
      td.setAttribute("value", i);
      var txtNode = document.createTextNode(objectKey[k]);
      td.appendChild(txtNode);
      tr.appendChild(td);
     }
    } else {
     var objectLenght = Object.keys(dataArray[i]).length;
     var objectKey = Object.keys(dataArray[i]);
     var objectValue = Object.values(dataArray[i]);
     //  console.log(objectLenght); //ith object lenght
     //  console.log(objectKey[i]); //ith object key [from array]
     //  console.log(objectValue); //ith object value [from array]
     for (j = 0; j < objectLenght; j++) {
      var td = document.createElement("TD");
      td.setAttribute("id", `myTd${i}-${j}`);
      td.setAttribute("value", j);
      var txtNode = document.createTextNode(objectValue[j]);
      td.appendChild(txtNode);
      tr.appendChild(td);
     }
    }
   }
  }
 }
}
