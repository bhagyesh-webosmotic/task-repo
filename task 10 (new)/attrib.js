let chkboxArr = [];
//for appending attributes to all html elements
function attrib(input, option) {
	for (let key in option) {
		if (option.hasOwnProperty(key)) {
			if (key == "required" || key == "onchange" || key == "label") {
			} else if (key == "onclick") {
				input.onclick = option[key];
			} else if (key == "onchange") {
				input.onchange = option[key];
			} else if (key == "className") {
				input.setAttribute("class", option[key]);
			} else if (key == "innerHTML") {
				input.innerHTML = option[key];
			} else if (key == "value") {
				input.setAttribute("value", option[key]);
			} else if (typeof option[key] === "object") {
				attrib(input, option[key]);
			} else {
				if (option[key] == "hobbies") {
					input.setAttribute("onfocus", "focusFunction(event)");
				} else {
					input.setAttribute("onblur", "blurFunction(event)");
				}
				input.setAttribute(key, option[key]);
			}
		}
	}
}

function focusFunction(e) {
	targetKey = e.target.getAttribute("key");
	elementsArray.forEach((element) => {
		if (element.key == targetKey) {
			if (targetKey == "hobbies") {
				if (chkboxArr.includes(e.target.value)) {
				} else {
					chkboxArr.push(e.target.value);
				}
				element.value = chkboxArr;
				console.log(`element value:${element.value}`);
				console.log(element);
				console.log(e.target.value);
			}
		}
	});
}

function blurFunction(e) {
	elementValue = e.target.value;
	targetKey = e.target.getAttribute("key");
	e.target.setAttribute("value", elementValue);
	elementsArray.forEach((element) => {
		if (element.key == targetKey) {
			element.value = e.target.value;
		}
	});
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
