import { useState } from "react";
import MockData from "../../MOCK_DATA.json";

function Summary() {
  const [data, setData] = useState(MockData);

  return (
    <div>
      <h3>Total quantity: {data.length}</h3>
      <h3>Total cost: {}</h3>
      <h3>Average price: {}</h3>
      <h3>
        Most expensive:{" $"}
        {Math.max(
          ...data.map((d) => {
            return d.price;
          })
        )}
      </h3>
      <h3>
        Cheapest:{" $"}
        {Math.min(
          ...data.map((d) => {
            return d.price;
          })
        )}
      </h3>
    </div>
  );
}

export default Summary;
