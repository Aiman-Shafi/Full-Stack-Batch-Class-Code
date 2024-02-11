import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createRoom } from "../../api/apiRooms";

export default function CreateRoomForm() {
  const { register, handleSubmit, reset } = useForm();

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: createRoom,
    onSuccess: () => {
      toast.success("Room successfully Added");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },
    // onError: (error) => {
    //   toast.error(error.message);
    // },
    mutationKey: ["createRooms"],
  });

  function onSubmit(data) {
    console.log(data);
    mutate({ ...data });
    reset();
  }

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
            className="peer input-style"
            {...register("name")}
          />
          <label htmlFor="name" className="input-label">
            Room Name
          </label>
        </div>

        {/* capacity */}
        <div className="relative my-6">
          <input
            id="maxCapacity"
            type="number"
            name="maxCapacity"
            placeholder="Max Capacity"
            className="peer input-style"
            {...register("maxCapacity")}
          />
          <label htmlFor="maxCapacity" className="input-label">
            Max Capacity
          </label>
        </div>

        {/* price */}
        <div className="relative my-6">
          <input
            id="regularPrice"
            type="number"
            name="regularPrice"
            placeholder="Regular Price"
            className="peer input-style"
            {...register("regularPrice")}
          />
          <label htmlFor="regularPrice" className="input-label">
            Price
          </label>
        </div>

        {/* discount */}
        <div className="relative my-6">
          <input
            id="discount"
            type="number"
            name="discount"
            placeholder="Max Capacity"
            className="peer input-style"
            {...register("discount")}
          />
          <label htmlFor="discount" className="input-label">
            Discount
          </label>
        </div>

        {/* image */}
        <div className="relative my-6">
          <input
            type="file"
            name="image"
            accept="image/*"
            className="file-input file-input-bordered text-sm file-input-primary w-full max-w-xs"
            // {...register("image")}
          />

          {/* <label htmlFor="discount" className="input-label">
            Discount
          </label> */}
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
