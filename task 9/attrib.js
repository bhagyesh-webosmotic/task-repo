function attrib(input, element) {
  switch (element.type) {
    case "range":
      input.setAttribute("min", 0);
      input.setAttribute("max", 10);
      break;
  }
  input.setAttribute("type", element.type);
  input.setAttribute("value", element.value);
  input.setAttribute("id", element.idName);
}
