/* eslint-disable react/prop-types */
function ExpenseList({ expenses, onDelete }) {
  //   console.log(props.expenses);
  const totalAmount = expenses.reduce((accumulator, expense) => {
    return accumulator + parseInt(expense.amount);
  }, 0);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-gray-300 text-xl">
              <th>Category</th>
              <th>Description</th>
              <th>Amount ($)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <th>{expense.category}</th>
                <td>{expense.description}</td>
                <td>${expense.amount}</td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => onDelete(expense.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="text-xl text-lime-300">
              <td></td>
              <td>Total</td>
              <td>$ {totalAmount}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

export default ExpenseList;
