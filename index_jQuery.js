// Create a random ID
function randomID() {
  var id = "id" + Math.random().toString(16).slice(2);
  return id;
}

// Add a new item to the list
function addNewItem() {
  var id = randomID();
  var $tableElement = $("table");
  var $trElement = $("<tr>").appendTo($tableElement).addClass("redBackground");
  var $tdElement = $("<td>").appendTo($trElement);
  var $tdElement1 = $("<td>").appendTo($trElement);
  var $tdElement2 = $("<td>").appendTo($trElement);

  $tdElement.attr("id", id).text(id);
  var $contentInput = $("<textarea>")
    .appendTo($tdElement1)
    .prop("readonly", true)
    .val(getValue());

  var $actionValueElement = $tdElement2;

  //Delete button

  var $actionButtonElement1 = $("<button>")
    .appendTo($actionValueElement)
    .addClass("deleteButton");
  $actionButtonElement1.html('<i class="fa-solid fa-trash"></i>');
  $actionButtonElement1.click(deleteRow);

  //Edit button

  var $actionButtonElement2 = $("<button>")
    .appendTo($actionValueElement)
    .addClass("editButton");
  $actionButtonElement2.html('<i class="fa-solid fa-pen-to-square"></i>');
  $actionButtonElement2.click(toggleEdit);

  //Done button

  var $actionButtonElement3 = $("<button>")
    .appendTo($actionValueElement)
    .addClass("doneButton");
  $actionButtonElement3.html('<i class="fa-regular fa-square"></i>');
  $actionButtonElement3.click(toggleDone);
}

function getValue() {
  var value = $("#myInput").val();
  return value;
}

function saveValue() {
  getValue();
  addNewItem();
}

var $saveButtonElement = $("#save");
$saveButtonElement.click(saveValue);

function deleteRow(event) {
  var $row = $(event.currentTarget).parent().parent();
  $row.remove();
}

function toggleEdit(event) {
  var $button = $(event.currentTarget);
  var $contentInput = $button.parent().prev().find("textarea");

  if ($contentInput.prop("readonly")) {
    $contentInput.prop("readonly", false);
    $button.html('<i class="fa-solid fa-floppy-disk"></i>');
  } else {
    $contentInput.prop("readonly", true);
    $button.html('<i class="fa-solid fa-pen-to-square"></i>');
  }
}

function toggleDone(event) {
  var $button = $(event.currentTarget);
  var $isDone = $button.parent().parent();

  if ($isDone.hasClass("redBackground")) {
    $button.html('<i class="fa-solid fa-square-check"></i>');
    $isDone.removeClass("redBackground").addClass("greenBackground");
  } else {
    $button.html('<i class="fa-regular fa-square"></i>');
    $isDone.removeClass("greenBackground").addClass("redBackground");
  }
}
