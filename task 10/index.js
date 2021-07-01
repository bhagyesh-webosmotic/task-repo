const myForm = document.getElementById("jsonForm");

function renderForm(obj) {
  obj.forEach((element) => {
    var label = document.createElement("label");
    var lineBreak = document.createElement("br");
    switch (element.type) {
      case "null":
        var input = document.createElement("input");
        input.attributes = attrib(input, element);
        input.hidden = "hidden";
        if (element.unique) {
          input.setAttribute("unique", element.unique);
        }
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
          input.attributs = setAttr(optn, optnItr);
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
          input.attributs = setAttr(input, optnItr);
          attrib(input, element);
          myForm.appendChild(input);
          let optlabel = document.createElement("label");
          optlabel.classList.add("radiolabel");
          optlabel.innerHTML = optnItr.innerHTML;
          optlabel.htmlFor = optnItr.attr.id;
          myForm.appendChild(optlabel);
          let lineBreak = document.createElement("br");
          myForm.appendChild(lineBreak);
        });
        var lineBreak = document.createElement("br");
        myForm.appendChild(lineBreak);
        break;

      case "checkbox":
        label.classList.add("inputlabel");
        label.innerHTML = element.label;
        label.htmlFor = element.key;
        myForm.appendChild(label);
        myForm.appendChild(lineBreak);
        element.options.forEach((optnItr) => {
          var input = document.createElement("input");
          input.attributs = setAttr(input, optnItr);
          attrib(input, element);
          myForm.appendChild(input);
          var optlabel = document.createElement("label");
          optlabel.classList.add("checkboxlabel");
          optlabel.innerHTML = optnItr.innerHTML;
          optlabel.htmlFor = optnItr.attr.id;
          myForm.appendChild(optlabel);
          var lineBreak = document.createElement("br");
          myForm.appendChild(lineBreak);
        });
        label.innerHTML = element.label;
        label.htmlFor = element.key;
        break;

      case "submit":
        var input = document.createElement("input");
        input.attributes = attrib(input, element);
        input.setAttribute("onclick", "saveFormData(event)");
        myForm.appendChild(input);
        myForm.appendChild(lineBreak);
        break;

      case "reset":
        var input = document.createElement("input");
        input.attributes = attrib(input, element);
        myForm.appendChild(input);
        myForm.appendChild(lineBreak);
        break;

      default:
        var input = document.createElement("input");
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
displayFormInfo();
