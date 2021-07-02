//for appending attributes to html elements
function attrib(input, element) {
	input.setAttribute("type", element.type);
	input.setAttribute("key", element.key);
	if (element.unique) {
		input.setAttribute("unique", element.unique);
	}
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
					input.onclick = element.attr.onclick;
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

//for appending attributes to radio & checkbox options html elements
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
				optnAttrib(input, option[key]);
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

//for appending label attributes to html elements
function labelAttrib(label, element, className) {
	if (className == undefined) {
		label.classList.add("inputlabel");
	} else {
		label.classList.add(className);
	}
	if (element.innerHTML && element.attr) {
		label.innerHTML = element.innerHTML;
		label.htmlFor = element.attr.id;
	} else {
		if (element.type == "radio" || element.type == "checkbox") {
			label.htmlFor = element.key;
		}
		if (element.attr) {
			label.htmlFor = element.attr.id;
		}
		label.innerHTML = element.label;
	}
}
