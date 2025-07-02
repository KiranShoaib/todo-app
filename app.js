let taskElement = document.querySelector("#task");

let formElement = document.querySelector("form");

let ulElement = document.querySelector("ul");

formElement.addEventListener("submit", function (e) {
  e.preventDefault();

  let taskText = taskElement.value;

  let liElement = document.createElement("li");

  liElement.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "border",
    "rounded",
    "border-gray-400",
    "p-2",
    "my-2"
  );

  liElement.innerText = taskText;

  let buttonElement = document.createElement("button");

  buttonElement.classList.add(
    "text-white",
    "bg-red-500",
    "rounded",
    "py-2",
    "px-4"
  );

  buttonElement.innerText = "Delete";

  liElement.append(buttonElement);

  ulElement.prepend(liElement);

  taskElement.value = "";

  buttonElement.addEventListener("click", function (e) {
    if (confirm("Are you sure you want to delete this task?")) {
      e.target.parentElement.remove();
    }
  });
});

let searchElement = document.querySelector("#search");

searchElement.addEventListener("input", function () {
  let searchText = searchElement.value;
  let allLiElementsArray = document.querySelectorAll("li");

  for (let i = 0; i < allLiElementsArray.length; i++) {
    let requireLiElement = allLiElementsArray[i];
    let requireLiText = allLiElementsArray[i].firstChild.data;

    if (requireLiText.includes(searchText)) {
      requireLiElement.classList.remove("hidden");
      requireLiElement.classList.add("flex");
    } else {
      requireLiElement.classList.remove("flex");
      requireLiElement.classList.add("hidden");
    }
  }
});

