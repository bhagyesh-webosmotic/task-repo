const myForm = document.getElementById("jsonForm");

function renderForm(obj) {
  obj.forEach((element) => {
    var label = document.createElement("label");
    var lineBreak = document.createElement("br");
    var input = document.createElement("input");
    switch (element.type) {
      case "null":
        input.attributes = attrib(input, element);
        input.hidden = "hidden";
        input.setAttribute("value", element.getValue());
        myForm.appendChild(input);
        break;

      case "textarea":
        var input = document.createElement("textarea");
        input.attributes = attrib(input, element);
        labelAttrib(label, element.label, element.attr.id);
        myForm.appendChild(label);
        myForm.appendChild(lineBreak);
        myForm.appendChild(input);
        myForm.appendChild(lineBreak);
        break;

      case "select":
        var input = document.createElement("select");
        input.attributes = attrib(input, element);
        element.options.forEach((optnItr) => {
          var optn = document.createElement("option");
          input.attributs = optnAttrib(optn, optnItr);
          input.type = element.type;
          input.appendChild(optn);
        });
        labelAttrib(label, element.label, element.attr.id);
        myForm.appendChild(label);
        myForm.appendChild(lineBreak);
        myForm.appendChild(input);
        myForm.appendChild(lineBreak);
        break;

      case "radio":
        labelAttrib(label, element.label, element.key);
        myForm.appendChild(label);
        myForm.appendChild(lineBreak);
        element.options.forEach((optnItr) => {
          let input = document.createElement("input");
          input.attributs = optnAttrib(input, optnItr);
          attrib(input, element);
          myForm.appendChild(input);
          let optlabel = document.createElement("label");
          labelAttrib(
            optlabel,
            optnItr.innerHTML,
            optnItr.attr.id,
            "radiolabel"
          );
          myForm.appendChild(optlabel);
          let lineBreak = document.createElement("br");
          myForm.appendChild(lineBreak);
        });
        var lineBreak = document.createElement("br");
        myForm.appendChild(lineBreak);
        break;

      case "checkbox":
        labelAttrib(label, element.label, element.key, "inputlabel");
        myForm.appendChild(label);
        myForm.appendChild(lineBreak);
        element.options.forEach((optnItr) => {
          var input = document.createElement("input");
          input.attributs = optnAttrib(input, optnItr);
          attrib(input, element);
          myForm.appendChild(input);
          var optlabel = document.createElement("label");
          labelAttrib(
            optlabel,
            optnItr.innerHTML,
            optnItr.attr.id,
            "checkboxlabel"
          );
          myForm.appendChild(optlabel);
          var lineBreak = document.createElement("br");
          myForm.appendChild(lineBreak);
        });
        labelAttrib(label, element.label, element.key);
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
        labelAttrib(label, element.label, element.attr.id);
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
