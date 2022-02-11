import { useState } from "react";

export default props => {
  const fields = [
    'id',
    'category',
    'name',
    'price',
    'manufacturer',
    'production_date',
  ]

  const [data, setData] = useState(props.data);
  const [order, setSort] = useState([
    { field: fields[0], direction: "" },
    { field: fields[1], direction: "" },
    { field: fields[2], direction: "" },
    { field: fields[3], direction: "" },
    { field: fields[4], direction: "" },
    { field: fields[5], direction: "" },
  ])

  const sorting = field => {
    const setdirection = old => old === "ASC" ? "DESC" : "ASC"

    setSort(order.map(row => field === row.field ? ({
      ...row, direction: setdirection(row.direction)
    }) : row))

    const dir = order.find(x => x.field === field).direction

    const sorter = (a, b) => {
      const aPath = dir === "ASC" ? 1 : -1
      return a[field] >= b[field] ? aPath : (aPath * -1)
    }

    setData(data.sort(sorter))
  }

  const generatePriceData = () => [...new Set(data.map((product) => product.price))]

  const clickHandler = idx => () => sorting(fields[idx])

  const rowStyle = id => id === props.highest.id ? { background: "red" } : {}

  return (
    <div>
      <table className="table table-bordered table-hover table-striped mt-3">
        <thead className="table-dark">
          <tr>{ fields.map((x, idx) => <th onClick={ clickHandler(idx) }>{ fields[idx] }</th>) }</tr>
        </thead>
        <tbody>{ data.map((row, idx) => (
          <tr key={ row.id } style={ rowStyle(row.id) }>{
            fields.map((x, idx) => <td>{ row[fields[idx]] }</td>)
          }</tr>
        )) }</tbody>
      </table>
    </div>
  )
}
