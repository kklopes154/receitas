document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".category-tab");
  const receitas = document.querySelectorAll(".menu-item");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // remove active das outras
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const categoria = tab.dataset.category;

      receitas.forEach(receita => {
        if (categoria === "todas" || receita.dataset.category === categoria) {
          receita.style.display = "block";
        } else {
          receita.style.display = "none";
        }
      });
    });
  });
});
