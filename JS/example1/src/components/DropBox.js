class Dropdown {
  OPTIONS = [5, 15];

  constructor(itemsPerPage, setItemsPerPage) {
    this.itemsPerPage = itemsPerPage;
    this.setItemsPerPage = setItemsPerPage;
    this.render();
  }

  onChange(value) {
    console.log("value", value);
    this.setItemsPerPage(value);
  }

  template() {
    return `
      <select>
        ${this.OPTIONS.map((option) => `<option>${option}</option>`)}
      </select>
      `;
  }

  render() {
    const element = document.getElementById("dropdown");

    element.innerHTML = this.template();
    element.addEventListener("change", (e) => {
      this.onChange(e.target.value);
    });
  }
}

export default Dropdown;
