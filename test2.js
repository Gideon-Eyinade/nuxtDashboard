function closeSidebar() {
  document.querySelector(".sidebar").style.display = "none";
  document.querySelector(".toggle").style.visibility = "visible";
}

function openSidebar() {
  document.querySelector(".toggle").style.visibility = "hidden";
  document.querySelector(".sidebar").style.display = "flex";
}

function home() {
  document.querySelector(".home-1").textContent = "Home";
  //   document.querySelector(".homee").style.color = "#0101d6";
}

function compliance() {
  document.querySelector(".home-1").textContent = "Compliance";
  //   document.querySelector(".compliance").style.color = "#0101d6";
}
