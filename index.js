// tạo id ngẫu nhiên
function randomID() {
  var id = "id" + Math.random().toString(16).slice(2);
  return id;
}
// thêm 1 dòng vào list
function addNewItem() {
  var id = randomID();
  var tableElement = document.querySelector("table");
  var trElement = document.createElement("tr");
  tableElement.appendChild(trElement); //  thêm thẻ tr
  document.querySelector("table").lastChild.classList.add('redBackground');
  var tdElement = document.createElement("td");
  var tdElement1 = document.createElement("td");
  var tdElement2 = document.createElement("td");
  var tableLastRow = document.querySelector("table").lastChild;
  tableLastRow.appendChild(tdElement);
  tableLastRow.lastChild.id = id; //  gán id cho thẻ td vừa thêm
  tdElement.innerText = id; //  nhập id
  tableLastRow.appendChild(tdElement1);
  var contentInput = document.createElement("textarea");
  contentInput.readOnly = true;
  document.querySelector("table").lastChild.lastChild.appendChild(contentInput);
  contentInput.innerText = getValue(); // nhập nội dung lấy từ ô input
  tableLastRow.appendChild(tdElement2);
  var actionValueElement = document.querySelector("table").lastChild.lastChild;
  var actionButtonElement1 = document.createElement("button");
  var actionButtonElement2 = document.createElement("button");
  var actionButtonElement3 = document.createElement("button");
  actionButtonElement1.innerText = "Delete"; // tạo nút xóa
  actionValueElement.appendChild(actionButtonElement1);
  document
    .querySelector("table")
    .lastChild.lastChild.firstChild.classList.add("deleteButton");
  var deleteButtonElements = document.querySelectorAll(".deleteButton");
  deleteButtonElements.forEach(function (button) {
    button.addEventListener("click", deleteRow);
  });
  actionButtonElement2.innerText = "Edit"; // tạo nút chỉnh sửa
  actionValueElement.appendChild(actionButtonElement2);

  document
    .querySelector("table")
    .lastChild.lastChild.lastChild.classList.add("editButton");
  actionButtonElement2.addEventListener("click", toggleEdit);
  actionButtonElement3.innerText = "Finished"; // tạo nút hoàn thành
  actionValueElement.appendChild(actionButtonElement3);
  document
    .querySelector("table")
    .lastChild.lastChild.lastChild.classList.add("doneButton");
    actionButtonElement3.addEventListener("click", toggleDone);
}
function getValue() {
  var value = inputElement.value;
  return value;
}
function saveValue() {
  getValue();
  addNewItem();
}

var inputElement = document.getElementById("myInput");
var saveButtonElement = document.getElementById("save");
saveButtonElement.addEventListener("click", saveValue);
function deleteRow(event) {
  var row = event.target.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
function toggleEdit(event) {
  var button = event.target;
  if (button.innerText == "Edit") {
    button.innerText = "Save";
  } else {
    button.innerText = "Edit";
  }
  var contentInput = button.parentNode.previousSibling.firstChild;

  if (contentInput.readOnly == true) {
    contentInput.readOnly = false;
  } else {
    contentInput.readOnly = true;
  }
}
function toggleDone(event) {
  var button = event.target;
  var isDone = button.parentNode.parentNode;
  if (isDone.classList.contains('redBackground')) {
    isDone.classList.remove('redBackground');
    isDone.classList.add('greenBackground');
  } else {
    isDone.classList.remove('greenBackground');
    isDone.classList.add('redBackground');
  }
  if (button.innerText == "Finished") {
    button.innerText = "Unfinished";
  } else {
    button.innerText = "Finished";
  }
}