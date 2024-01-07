/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

function ExpenseForm({ addExpense }) {
  const categories = ["Utility", "Groceries", "Tour"];

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitData = (data) => {
    addExpense(data);
    reset();
  };

  return (
    <>
      <div className="text-3xl mb-4 font-bold">Track Expense 📝</div>
      <form onSubmit={handleSubmit((data) => submitData(data))}>
        {/* Description */}
        <input
          type="text"
          placeholder="Description"
          className="input input-bordered w-full max-w-xs"
          {...register("description", {
            required: true,
            minLength: 4,
            maxLength: 10,
          })}
        />
        {errors.description?.type === "required" && (
          <p className="text-red-400 px-1 pt-2">Field is required</p>
        )}
        {errors.description?.type === "minLength" && (
          <p className="text-red-400 px-1 pt-2">
            Too short! minimum character is 4{" "}
          </p>
        )}
        {errors.description?.type === "maxLength" && (
          <p className="text-red-400 px-1 pt-2">
            Too Big! max character is 10{" "}
          </p>
        )}
        <br />
        {/* Amount  */}
        <input
          type="number"
          placeholder="$40"
          className="input input-bordered w-full max-w-xs my-4"
          {...register("amount")}
        />
        <br />
        {/* Choose Category */}
        <select
          className="select select-bordered w-full max-w-xs"
          {...register("category")}
        >
          <option value="">Choose Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {/* Submit  */}
        <br />
        <input
          type="submit"
          value={"Add Expenses"}
          className="btn btn-primary max-w-xs w-full mt-3"
        />
      </form>
    </>
  );
}

export default ExpenseForm;
