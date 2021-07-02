const myForm = document.getElementById("jsonForm");

function renderForm(obj) {
  obj.forEach((element) => {
    const label = document.createElement("label");
    const lineBreak = document.createElement("br");
    let input = document.createElement("input");
    switch (element.type) {
      case "null":
        let inputNull = document.createElement("input");
        inputNull.attributes = attrib(inputNull, element);
        inputNull.hidden = "hidden";
        inputNull.setAttribute("value", element.getValue());
        myForm.appendChild(inputNull);
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
        const lineBreak2 = document.createElement("br");
        myForm.appendChild(lineBreak2);
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
          const lineBreak3 = document.createElement("br");
          myForm.appendChild(lineBreak3);
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
