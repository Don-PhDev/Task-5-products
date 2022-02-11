function Options({ prices }) {
  return (
    <div className="options">
      <h2>Filtering</h2>
      <div className="col">
        <button className="btn btn-primary mb-2">Options</button>
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="category">Category</label>
        <input type="text" className="form-control" id="category" />
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="manufacturer">Manufacturer</label>
        <input type="text" className="form-control" id="manufacturer" />
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="price">Price</label>
        <select className="form-control" id="price">
          <option value="">Select</option>
          {prices.map(price => {
            return <option value={price}>{price}</option>;
          })}
        </select>
      </div>
        <button className="btn btn-secondary mr-2">Reset</button>
        <button className="btn btn-success m-2">Apply</button>
    </div>
  );
}

export default Options;
