function Summary({ data, highest, lowest }) {
  console.log({ highest})
  const totalCost = () => {
    return data.reduce((sum, a) => sum + a.price, 0)
  }

  const averagePrice = () => {
    if (data.length === 0) return 0.0
    return totalCost() / data.length
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <table className="table table-bordered mt-2 text-center">
      <thead>
        <tr>
          <th><h3>Total quantity</h3></th>
          <th><h3>Total cost</h3></th>
          <th><h3>Average price</h3></th>
          <th><h3>Most expensive</h3></th>
          <th><h3>Cheapest</h3></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.length}</td>
          <td>{formatter.format(totalCost())}</td>
          <td>{formatter.format(averagePrice())}</td>
          <td>{highest.name} {formatter.format(highest.price)}</td>
          <td>{lowest.name} {formatter.format(lowest.price)}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Summary;
