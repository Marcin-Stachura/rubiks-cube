console.log("Siemanko!");

const tableButton = document.querySelector(".tableButton");
const tableBody = document.querySelector(".tableBody");

function tableShown() {
  tableButton.innerText = "Porównanie opisanych wyżej metod - ukryj"
  tableBody.style.display = "block";
}

function tableHidden() {
  tableButton.innerText = "Porównanie opisanych wyżej metod - pokaż"
  tableBody.style.display = "none";
}

tableHidden();

tableButton.addEventListener("click", () => {
  if (tableBody.style.display === "block") {
    tableHidden();
  }
  else {
    tableShown();
  }
});