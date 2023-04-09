const myButton = document.querySelector("#button");

function empty() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");
  if (name.value === "") {
    alert("Name cannot be empty!");
  }
  if (email.value === "") {
    alert("email cannot be empty!");
  }
  if (message.value === "") {
    alert("message cannot be empty!");
  } else {
    alert("Successfully Submitted");
  }
}

myButton.addEventListener("click", empty);
