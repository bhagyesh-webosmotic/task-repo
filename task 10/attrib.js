function attrib(
  input,
  type,
  key,
  id,
  className,
  placeholder,
  name,
  required,
  onchange,
  rows
) {
  input.setAttribute("type", type);
  input.setAttribute("key", key);
  if (type == "null") {
    return;
  } else {
    input.setAttribute("id", id);
    input.classList.add(className);
    if (type == "checkbox" || type == "radio" || type == "select") {
      input.setAttribute("no-placeholder", placeholder);
    } else {
      input.setAttribute("placeholder", placeholder);
    }
    if (type == "checkbox") {
      input.setAttribute("no-name", name);
    } else {
      input.setAttribute("name", name);
    }
    if (type == "checkbox") {
      input.setAttribute("not-required", required);
    } else {
      input.setAttribute("required", required);
    }
    input.onchange = onchange;
    if (type == "textarea") {
      input.setAttribute("rows", rows);
    } else {
      return;
    }
  }
}

function labelAttrib(label, innerHTML, htmlFor) {
  label.classList.add("inputlabel");
  label.innerHTML = innerHTML;
  label.htmlFor = htmlFor;
}

function btnAttrib(input, type, id, className, name, value, onclick) {
  input.setAttribute("type", type);
  input.setAttribute("id", id);
  input.setAttribute("name", name);
  input.classList.add(className);
  input.setAttribute("value", value);
  input.onclick = onclick;
}
