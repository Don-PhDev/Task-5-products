import "./App.css";
import Options from "./components/Options";
import Summary from "./components/Summary";
import Table from "./components/Table";

function App() {
  return (
    <div className="app">
      <h1>Products</h1>
      <Options />
      <Summary />
      <Table />
    </div>
  );
}

export default App;
