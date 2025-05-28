function openForm(type) {
  const form = document.getElementById("quoteForm");
  form.style.display = "block";
  const titleMap = {
    life: "Life Insurance Form",
    health: "Health Insurance Form",
    mutual: "Mutual Fund Investment Form",
    retirement: "Retirement Planning Form",
    child: "Child Education Plan Form"
  };
  form.querySelector("h3").innerText = titleMap[type] || "Request a Free Quote";
}

function closeForm() {
  document.getElementById("quoteForm").style.display = "none";
}
