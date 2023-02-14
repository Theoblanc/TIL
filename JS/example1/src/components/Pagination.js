class Pagination {
  constructor(items, itemsPerPage, currentPage, setCurrentPage) {
    this.items = items;
    this.itemsPerPage = itemsPerPage;
    this.currentPage = currentPage;
    this.setCurrentPage = setCurrentPage;
    this.render();
  }

  get pageCount() {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }

  render() {
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";
    const prevButton = document.createElement("button");
    prevButton.textContent = "<<";
    prevButton.addEventListener("click", () => {
      this.setCurrentPage(1);
      this.render();
    });

    paginationContainer.appendChild(prevButton);

    for (let i = 1; i <= this.pageCount; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      button.addEventListener("click", () => {
        this.setCurrentPage(i);
        // this.renderItems();
        this.render();
      });
      paginationContainer.appendChild(button);
    }

    const nextButton = document.createElement("button");
    nextButton.textContent = ">>";

    nextButton.addEventListener("click", () => {
      this.setCurrentPage(this.pageCount);
      this.render();
    });
    paginationContainer.appendChild(nextButton);
  }
}

export default Pagination;
