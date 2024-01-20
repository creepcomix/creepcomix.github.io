document.getElementById("showeth").style.display = "none";

document.getElementById("submitForm").addEventListener("click", function () {
  document.getElementById("interestForm").style.display = "none";
});

document.getElementById("hideForm").addEventListener("click", function () {
  document.getElementById("interestForm").style.display = "none";

  document.getElementById("showeth").style.display = "block";
});

document.getElementById("showButton").addEventListener("click", function () {
  document.getElementById("interestForm").style.display = "block";
  document.getElementById("showButton").style.display = "none";
});

function darkMode() {
  document.getElementById("siteContent").style.backgroundColor = "black";
}

function lightMode() {
  document.getElementById("siteContent").style.backgroundColor = "white";
}
