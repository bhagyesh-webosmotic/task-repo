var myJSON = [
  {
    label: "File",
    icon: "fas fa-file",
    items: [
      {
        label: "New",
        icon: "fas fa-plus-square",
        items: [
          {
            label: "Bookmark",
            icon: "fas fa-bookmark",
          },
          {
            label: "Video",
            icon: "fas fa-video",
          },
        ],
      },
      {
        label: "Delete",
        icon: "fas fa-trash-alt",
        command: (event) => {
          console.log("Delete Clicked", event);
        },
      },
      {
        separator: true,
      },
      {
        label: "Export",
        icon: "fas fa-file-export",
        command: (event) => {
          console.log("Export Clicked", event);
        },
      },
    ],
  },
  {
    label: "Edit",
    icon: "fas fa-edit",
    items: [
      {
        label: "Left",
        icon: "fas fa-arrow-left",
      },
      {
        label: "Right",
        icon: "fas fa-arrow-right",
      },
      {
        label: "Center",
        icon: "fas fa-align-center",
      },
      {
        label: "Justify",
        icon: "fas fa-align-justify",
      },
    ],
  },
  {
    label: "Users",
    icon: "fas fa-users",
    items: [
      {
        label: "New",
        icon: "fas fa-plus-circle",
      },
      {
        label: "Delete",
        icon: "fas fa-trash-alt",
      },
      {
        label: "Search",
        icon: "fas fa-search",
        items: [
          {
            label: "Filter",
            icon: "fas fa-filter",
            items: [
              {
                label: "Print",
                icon: "fas fa-print",
              },
            ],
          },
          {
            icon: "fas fa-list",
            label: "List",
          },
        ],
      },
    ],
  },
  {
    label: "Events",
    icon: "fas fa-calendar-day",
    items: [
      {
        label: "Edit",
        icon: "fas fa-edit",
        items: [
          {
            label: "Save",
            icon: "fas fa-save",
          },
          {
            label: "Delete",
            icon: "fas fa-trash",
          },
        ],
      },
      {
        label: "Archieve",
        icon: "fas fa-file-archive",
        items: [
          {
            label: "Remove",
            icon: "fas fa-eraser",
          },
        ],
      },
    ],
  },
  {
    separator: true,
  },
  {
    label: "Quit",
    icon: "fas fa-sign-out-alt",
    command: (event) => {
      console.log("Quit Clicked", event);
    },
  },
];

var myTarget = document.getElementById("contextMenu");
myTarget.appendChild(renderList(myJSON));
function renderList(obj) {
  var result = document.createElement("ul");
  obj.forEach((element) => {
    var list = document.createElement("li");
    if (element.separator) {
      list.classList.add("separator");
    } else {
      var icon = document.createElement("i");
      icon.className = element.icon;
      var textnode = document.createTextNode(element.label);
      list.appendChild(icon);
      list.appendChild(textnode);
      list.onclick = element.command;
      if (element.items) {
        list.appendChild(renderList(element.items));
      }
    }
    result.appendChild(list);
  });
  return result;
}
window.onclick = hideContextMenu;
window.onkeydown = listenKeys;
var contextMenu = document.getElementById("contextMenu");
function showContextMenu(event) {
  contextMenu.style.display = "block";
  contextMenu.style.left = event.clientX + "px";
  contextMenu.style.top = event.clientY + "px";
  return false;
}
function hideContextMenu() {
  contextMenu.style.display = "none";
}
function listenKeys(event) {
  var keyCode = event.which || event.keyCode;
  if (keyCode == 27) {
    hideContextMenu();
  }
}
