const myForm = document.getElementById("jsonForm");

function renderForm(obj) {
	obj.forEach((element) => {
		const label = document.createElement("label");
		const lineBreak = document.createElement("br");
		let input = document.createElement("input");
		switch (element.type) {
			case "null":
				let inputNull = document.createElement("input");
				attrib(inputNull, element);
				inputNull.hidden = "hidden";
				inputNull.setAttribute("value", element.getValue());
				myForm.appendChild(inputNull);
				break;

			case "textarea":
				let textarea = document.createElement("textarea");
				attrib(textarea, element);
				labelAttrib(label, element);
				myForm.appendChild(label);
				myForm.appendChild(lineBreak);
				myForm.appendChild(textarea);
				myForm.appendChild(lineBreak);
				break;

			case "select":
				let select = document.createElement("select");
				attrib(select, element);
				element.options.forEach((optnItr) => {
					let optn = document.createElement("option");
					attrib(optn, optnItr);
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
					attrib(input, element);
					attrib(input, optnItr);
					myForm.appendChild(input);
					let optLabel = document.createElement("label");
					labelAttrib(optLabel, optnItr, "radiolabel");
					myForm.appendChild(optLabel);
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
					attrib(checkbox, element);
					attrib(checkbox, optnItr);
					myForm.appendChild(checkbox);
					let optLabel = document.createElement("label");
					labelAttrib(optLabel, optnItr, "checkboxlabel");
					myForm.appendChild(optLabel);
					const lineBreak3 = document.createElement("br");
					myForm.appendChild(lineBreak3);
				});
				break;

			case "submit":
				attrib(input, element);
				input.setAttribute("onclick", "saveFormData(event)");
				myForm.appendChild(input);
				myForm.appendChild(lineBreak);
				break;

			case "reset":
				attrib(input, element);
				myForm.appendChild(input);
				myForm.appendChild(lineBreak);
				break;

			default:
				attrib(input, element);
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
