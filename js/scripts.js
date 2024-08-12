function newItem() {
  //javascript
  //1. Adding a new item to the list of items:
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  let text = document.createTextNode(inputValue);
  li.append(text);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    $("#list").append(li);
  }

  //2. Crossing out an item from the list of items:

  // //function crossOut() {
  //   li.classList.add("strike");
  // }

  li.on("dblclick", function () {
    /*on = addeventlister*/
    li.addClass("strike");
  });

  // li.addEventListener("dblclick", crossOut);    /*dblclick:double click*/
  function crossOut() {
    li.toggleClass("strike");
  }

  //3(i). Adding the delete button "X":
  //   let crossOutButton = document.createElement("crossOutButton");
  let crossOutButton = $("<crossOutButton></crossOutButton");

  //  	crossOutButton.appendChild(document.createTextNode("X"));
  crossOutButton.append(document.createTextNode("    X "));
  //  	li.appendChild(crossOutButton);
  li.append(crossOutButton);
  //  	crossOutButton.addEventListener("click", deleteListItem);
  crossOutButton.on("click", deleteListItem);

  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  
  //    function deleteListItem(){
  //  		li.classList.add("delete")
  //  	}
  function deleteListItem() {
    li.addClass("delete");
  }
  // 4. Reordering the items:
  $("#list").sortable();
}

