function attrib(input, element) {
  input.setAttribute("type", element.type);
  input.setAttribute("key", element.key);
  if (element.type == "submit" || element.type == "reset") {
    input.removeAttribute("key");
  }
  if (element.attr) {
    objKeys = Object.keys(element.attr);
    objKeys.forEach((attr) => {
      switch (attr) {
        case "className":
          input.classList.add(element.attr.className);
          break;
        case "onchange":
          input.onchange = element.attr.onchange;
          break;
        case "onclick":
          input.setAttribute("onclick", "element.attr.onclick()");
          break;
        case "required":
          input.setAttribute("required", "");
          break;
        default:
          input.setAttribute(`${attr}`, element.attr[attr]);
          break;
      }
    });
  }
}

function optnAttrib(input, option) {
  for (let key in option) {
    if (option.hasOwnProperty(key)) {
      if (
        key == "required" ||
        key == "onchange" ||
        key == "label" ||
        key == "onclick"
      ) {
      } else if (key == "className") {
        input.setAttribute("class", option[key]);
      } else if (typeof option[key] === "object") {
        setAttr(input, option[key]);
      } else if (key == "innerHTML") {
        input.innerHTML = option[key];
      } else if (key == "value") {
        input.setAttribute("value", option[key]);
      } else {
        input.setAttribute(key, option[key]);
      }
    }
  }
}

function labelAttrib(label, innerHTML, htmlFor) {
  label.classList.add("inputlabel");
  label.innerHTML = innerHTML;
  label.htmlFor = htmlFor;
}
