const myForm = document.getElementById("jsonForm");

function renderForm(obj) {
  obj.forEach((element) => {
    let label = document.createElement("label");
    var lineBreak = document.createElement("br");
    let input = document.createElement("input");
    switch (element.type) {
      case "null":
        input.attributes = attrib(input, element);
        input.hidden = "hidden";
        input.setAttribute("value", element.getValue());
        myForm.appendChild(input);
        break;

      case "textarea":
        let textarea = document.createElement("textarea");
        textarea.attributes = attrib(textarea, element);
        labelAttrib(label, element);
        myForm.appendChild(label);
        myForm.appendChild(lineBreak);
        myForm.appendChild(textarea);
        myForm.appendChild(lineBreak);
        break;

      case "select":
        let select = document.createElement("select");
        select.attributes = attrib(select, element);
        element.options.forEach((optnItr) => {
          let optn = document.createElement("option");
          select.attributs = optnAttrib(optn, optnItr);
          select.type = element.type;
          select.appendChild(optn);
        });
        labelAttrib(label, element);
        myForm.appendChild(label);
        myForm.appendChild(lineBreak);
        myForm.appendChild(select);
        myForm.appendChild(lineBreak);
        break;

      case "radio":
        labelAttrib(label, element);
        myForm.appendChild(label);
        myForm.appendChild(lineBreak);
        element.options.forEach((optnItr) => {
          let input = document.createElement("input");
          input.attributs = optnAttrib(input, optnItr);
          attrib(input, element);
          myForm.appendChild(input);
          let optlabel = document.createElement("label");
          labelAttrib(optlabel, optnItr, "radiolabel");
          myForm.appendChild(optlabel);
          let lineBreak = document.createElement("br");
          myForm.appendChild(lineBreak);
        });
        var lineBreak = document.createElement("br");
        myForm.appendChild(lineBreak);
        break;

      case "checkbox":
        labelAttrib(label, element);
        myForm.appendChild(label);
        myForm.appendChild(lineBreak);
        element.options.forEach((optnItr) => {
          let checkbox = document.createElement("input");
          checkbox.attributs = optnAttrib(checkbox, optnItr);
          attrib(checkbox, element);
          myForm.appendChild(checkbox);
          let optlabel = document.createElement("label");
          labelAttrib(optlabel, optnItr, "checkboxlabel");
          myForm.appendChild(optlabel);
          var lineBreak = document.createElement("br");
          myForm.appendChild(lineBreak);
        });
        break;

      case "submit":
        input.attributes = attrib(input, element);
        input.setAttribute("onclick", "saveFormData(event)");
        myForm.appendChild(input);
        myForm.appendChild(lineBreak);
        break;

      case "reset":
        input.attributes = attrib(input, element);
        myForm.appendChild(input);
        myForm.appendChild(lineBreak);
        break;

      default:
        input.attributes = attrib(input, element);
        labelAttrib(label, element);
        myForm.appendChild(label);
        myForm.appendChild(lineBreak);
        myForm.appendChild(input);
        myForm.appendChild(lineBreak);
        break;
    }
  });
}
renderForm(elementsArray);
fetchData();
