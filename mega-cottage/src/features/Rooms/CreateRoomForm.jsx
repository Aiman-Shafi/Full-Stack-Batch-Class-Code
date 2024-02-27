import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createRoom } from "../../api/apiRooms";

export default function CreateRoomForm() {
  const { register, handleSubmit, reset, formState, getValues } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: createRoom,
    onSuccess: () => {
      toast.success("Room successfully Added");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
    mutationKey: ["createRooms"],
  });

  function onSubmit(data) {
    console.log(data);
    mutate({ ...data });
    reset();
  }

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <>
      {/*    <!-- Component: Rounded input with leading icon--> */}
      <form
        action=""
        className="border-2 px-5 mt-10 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl mt-3 text-gray-600 font-bold ">
          Add Room Form
        </h2>
        <div className="relative my-6">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="your name"
            disabled={isLoading}
            className="peer input-style"
            {...register("name", {
              required: "Name field is required",
            })}
          />
          <label htmlFor="name" className="input-label">
            Room Name
          </label>
          {errors?.name && (
            <p className="text-sm text-red-500 mt-2 ml-2">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* capacity */}
        <div className="relative my-6">
          <input
            id="maxCapacity"
            type="number"
            name="maxCapacity"
            disabled={isLoading}
            placeholder="Max Capacity"
            className="peer input-style"
            {...register("maxCapacity", {
              required: "Max Capacity field is required",
              min: {
                value: 1,
                message: "Capacity should be at least 1",
              },
            })}
          />
          <label htmlFor="maxCapacity" className="input-label">
            Max Capacity
          </label>
          {errors?.maxCapacity && (
            <p className="text-sm text-red-500 mt-2 ml-2">
              {errors.maxCapacity.message}
            </p>
          )}
        </div>

        {/* price */}
        <div className="relative my-6">
          <input
            id="regularPrice"
            type="number"
            name=""
            disabled={isLoading}
            placeholder="Regular Price"
            className="peer input-style"
            {...register("regularPrice", {
              required: "Price field is required",
              min: {
                value: 50,
                message: "Price should be at $50 or more",
              },
            })}
          />
          <label htmlFor="regularPrice" className="input-label">
            Price
          </label>
          {errors?.regularPrice && (
            <p className="text-sm text-red-500 mt-2 ml-2">
              {errors.regularPrice.message}
            </p>
          )}
        </div>

        {/* discount */}
        <div className="relative my-6">
          <input
            id="discount"
            type="number"
            name="discount"
            placeholder="Discount"
            disabled={isLoading}
            className="peer input-style"
            {...register("discount", {
              required: "Discount field is required",
              validate: (value) =>
                value <= getValues().regularPrice ||
                "Discount should be less than Regular Price",
            })}
          />
          <label htmlFor="discount" className="input-label">
            Discount
          </label>
          {errors?.discount && (
            <p className="text-sm text-red-500 mt-2 ml-2">
              {errors.discount.message}
            </p>
          )}
        </div>

        {/* image */}
        <div className="relative my-6">
          <input
            type="file"
            name="image"
            accept="image/*"
            className="file-input file-input-bordered text-sm file-input-primary w-full max-w-xs"
            {...register("image", { required: "Image is required" })}
          />

          {/* <label htmlFor="discount" className="input-label">
            Discount
          </label> */}
          {errors?.image && (
            <p className="text-sm text-red-500 mt-2 ml-2">
              {errors.image.message}
            </p>
          )}
        </div>

        <div className="relative my-6 flex gap-3">
          <button type="submit" className="btn btn-primary">
            Add New Room
          </button>
          <button type="reset" className="btn bg-transparent">
            Cancel
          </button>
        </div>
      </form>
      {/*    <!-- End Rounded input with leading icon--> */}
    </>
  );
}
