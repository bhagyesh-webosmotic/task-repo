const myForm = document.getElementById("jsonForm");

function renderForm(obj) {
  obj.forEach((element) => {
    var label = document.createElement("label");
    var lineBreak = document.createElement("br");
    switch (element.type) {
      case "null":
        var input = document.createElement("input");
        attrib(input, element.type, element.key);
        input.hidden = "hidden";
        if (element.unique) {
          input.setAttribute("unique", element.unique);
        }
        input.setAttribute("value", element.getValue());
        myForm.appendChild(input);
        break;

      case "textarea":
        var input = document.createElement("textarea");
        attrib(
          input,
          element.type,
          element.key,
          element.attr.id,
          element.attr.className,
          element.attr.placeholder,
          element.attr.name,
          element.attr.required,
          element.attr.onchange,
          element.attr.rows
        );
        labelAttrib(label, element.label, element.attr.id);
        myForm.appendChild(label);
        myForm.appendChild(lineBreak);
        myForm.appendChild(input);
        myForm.appendChild(lineBreak);
        break;

      case "select":
        var input = document.createElement("select");
        attrib(
          input,
          element.type,
          element.key,
          element.attr.id,
          element.attr.className,
          false, //placeholder
          element.attr.name,
          element.attr.required,
          element.attr.onchange
        );
        element.options.forEach((optnItr) => {
          var optn = document.createElement("option");
          optn.innerHTML = optnItr.innerHTML;
          optn.setAttribute("value", optnItr.value);
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
          var input = document.createElement("input");
          attrib(
            input,
            element.type,
            element.key,
            optnItr.attr.id,
            optnItr.attr.className,
            false, //placeholder
            optnItr.name,
            optnItr.attr.required,
            optnItr.attr.onchange
          );
          input.setAttribute("value", optnItr.value);
          input.innerHTML = optnItr.innerHTML;
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
        label.classList.add("inputlabel");
        label.innerHTML = element.label;
        label.htmlFor = element.key;
        myForm.appendChild(label);
        myForm.appendChild(lineBreak);
        element.options.forEach((optnItr) => {
          var input = document.createElement("input");
          attrib(
            input,
            element.type,
            element.key,
            optnItr.attr.id,
            optnItr.attr.className,
            false, //placeholder
            false, //name
            false, //required
            optnItr.attr.onchange
          );
          input.setAttribute("value", optnItr.value);
          input.innerHTML = optnItr.innerHTML;
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
        btnAttrib(
          input,
          element.type,
          element.attr.id,
          element.attr.className,
          element.attr.name,
          element.attr.value,
          element.attr.onclick
        );
        // input.setAttribute("type", element.type);
        // input.setAttribute("type", "button");
        input.setAttribute("onclick", "saveFormData(event)");
        myForm.appendChild(input);
        myForm.appendChild(lineBreak);
        break;
      case "reset":
        var input = document.createElement("input");
        btnAttrib(
          input,
          element.type,
          element.attr.id,
          element.attr.className,
          element.attr.name,
          element.attr.value,
          element.attr.onclick
        );
        myForm.appendChild(input);
        myForm.appendChild(lineBreak);
        break;
      default:
        var input = document.createElement("input");
        attrib(
          input,
          element.type,
          element.key,
          element.attr.id,
          element.attr.className,
          element.attr.placeholder,
          element.attr.name,
          element.attr.required,
          element.attr.onchange
        );
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
