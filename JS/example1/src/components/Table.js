class Table {
  constructor(data) {
    this.data = data;
    this.init();
    this.render();
  }

  init() {
    document.getElementById("table").innerHTML = "";
  }

  displayTableHead = (data) => {
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");

    for (let i = 0; i < data.length; i++) {
      const th = document.createElement("th");
      th.appendChild(document.createTextNode(data[i]));
      tr.appendChild(th);
    }

    thead.appendChild(tr);
    return thead;
  };

  displayTableBody = (data) => {
    const tr = document.createElement("tr");

    for (let i = 0; i < data.length; i++) {
      const td = document.createElement("td");
      td.appendChild(document.createTextNode(data[i]));
      tr.appendChild(td);
    }
    return tr;
  };

  render() {
    const table = document.createElement("table");
    const thead = this.displayTableHead(["name", "title", "email", "role"]);
    table.appendChild(thead);
    const tbody = document.createElement("tbody");

    for (let i = 0; i < this.data.length; i++) {
      let tr = this.displayTableBody(Object.values(this.data[i]));
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);

    document.getElementById("table").appendChild(table);
  }
}

export default Table;
