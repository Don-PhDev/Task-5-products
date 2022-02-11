import { useState } from "react";
import "./App.css";
import Options from "./components/Options";
import Summary from "./components/Summary";
import Table from "./components/Table";
import MockData from "./MOCK_DATA.json";

function App() {
  const transformedData = () => {
    return MockData.map(x => {
      return { ...x, price: parseFloat(x.price) || 0.0 }
    })
  }
  const [data, setData] = useState(transformedData);

  const highest = data.reduce((high, x) => high.price >= x.price ? high : x, data[0])
  const lowest = data.reduce((low, x) => low.price <= x.price ? low : x, data[0])

  const generatePriceData = () => {
    return [...new Set(data.map((product) => product.price))];
  };

  return (
    <div className="app container">
      <h1>Products</h1>

      <div className="content">
        <div className="row">
          <div className="col-sm-12">
            <Options prices={generatePriceData()} />
          </div>
        </div>
        <div className="col-sm-9">
          <div className="row mt-5">
            <Summary data={data} highest={highest} lowest={lowest} />
            <Table data={data} highest={highest} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
