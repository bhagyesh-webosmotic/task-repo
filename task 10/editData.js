function editFormData(e) {
  if (localStorage["jsonform"] === undefined) {
    localStorage["jsonform"] = "[]";
  } else {
    let dataArray = [];
    dataArray = JSON.parse(localStorage["jsonform"]);
    editId = e.target.id;
    // console.log(e.target.id);
    dataArray.forEach((LSelement) => {
      if (LSelement.userId == editId) {
        elementsArray.forEach((JSONelement) => {
          var key = JSONelement.key;
          if (
            JSONelement.type != "submit" &&
            JSONelement.type != "reset" &&
            JSONelement.type != "radio" &&
            JSONelement.type != "checkbox"
          ) {
            //retriving DOM input fields values from localstorage
            document.querySelector(`[key="${JSONelement.key}"]`).value =
              LSelement[key];
          } else if (
            JSONelement.type == "null" &&
            JSONelement.key == "userId"
          ) {
            document.querySelector(`[key="${JSONelement.key}"]`).value =
              LSelement[key];
          } else if (
            //for retriving radio value
            JSONelement.type == "radio" &&
            JSONelement.type != "submit" &&
            JSONelement.type != "reset"
          ) {
            let ele = document.getElementsByName("gender");
            for (i = 0; i < ele.length; i++) {
              if (ele[i].value == LSelement[key]) {
                ele[i].checked = true;
              }
            }
          } else if (
            //for retriving checkbox values
            JSONelement.type == "checkbox" &&
            JSONelement.type != "submit" &&
            JSONelement.type != "reset"
          ) {
            let chkbxln = document.querySelectorAll(
              `[key="${JSONelement.key}"]`
            );
            var k = 0;
            for (i = 0; i < chkbxln.length; i++) {
              if (chkbxln[i].value == LSelement[key][k]) {
                chkbxln[i].checked = true;
                k++;
              }
            }
          } else if (
            JSONelement.type == "null" &&
            JSONelement.key == "createdAt"
          ) {
            document.querySelector(`[key="${JSONelement.key}"]`).value =
              LSelement[key];
          }
        });
      }
    });
  }
}
