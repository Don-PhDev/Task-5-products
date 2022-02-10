import { useState } from "react";
import MockData from "../../MOCK_DATA.json";

function Table() {
  const [data, setData] = useState(MockData);
  const [order, setOrder] = useState("ASC");
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col]?.toLowerCase() > b[col]?.toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    } else {
      setOrder("ASC");
    }
  };

  return (
    <div>
      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr onClick={() => sorting()}>
            <th>#</th>
            <th>Category</th>
            <th>Name</th>
            <th>Price</th>
            <th>Manufacturer</th>
            <th>Production Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => {
            return (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.category}</td>
                <td>{d.name}</td>
                <td>${d.price}</td>
                <td>{d.manufacturer}</td>
                <td>{d.production_date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
