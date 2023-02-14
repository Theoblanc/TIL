import DropBox from "./src/components/DropBox.js";
import Table from "./src/components/Table.js";
import Pagination from "./src/components/Pagination.js";

class App {
  constructor() {
    this.itemsPerPage = 5;
    this.item = [];
    this.currentPage = 1;
    this.render();
  }

  getUser = async () => {
    try {
      const response = await fetch("./data.json");
      if (response.ok) {
        const user = await response.json();
        this.item = [...user];
      }
    } catch (error) {
      new Error(error);
    }
  };

  setItemsPerPage = (itemsPerPage) => {
    this.itemsPerPage = itemsPerPage;
    this.renderItem();
  };

  setCurrentPage = (currentPage) => {
    this.currentPage = currentPage;
    this.renderItem();
  };

  renderItem = () => {
    new Table(
      this.item.slice(
        (this.currentPage - 1) * this.itemsPerPage,
        this.currentPage * this.itemsPerPage
      )
    );
    new Pagination(
      this.item,
      this.itemsPerPage,
      this.currentPage,
      this.setCurrentPage
    );
  };

  render = async () => {
    await this.getUser();
    document.querySelector("#app");
    new DropBox(this.itemsPerPage, this.setItemsPerPage);
    this.renderItem();
  };
}

export default App;

// 1page start 0 end 5
// 2page start 6 end 10
