import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { deleteRooms } from "../../api/apiRooms";

export default function TableRow({ room }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = room;

  // delete a room
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: deleteRooms,
    onSuccess: () => {
      toast.success("Room successfully Deleted");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <tr className="block border-b sm:table-row last:border-b-0 border-slate-200 sm:border-none">
      <td
        data-th="Name"
        className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 p-2"
      >
        <img
          src={image}
          className="w-full h-[3rem] rounded shadow-lg"
          alt={name}
        />
      </td>
      <td
        data-th="Title"
        className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
      >
        {name}
      </td>
      <td
        data-th="Company"
        className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
      >
        {maxCapacity}
      </td>
      <td
        data-th="Role"
        className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
      >
        {regularPrice}
      </td>
      <td
        data-th="Username"
        className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
      >
        {discount}
      </td>
      <td
        data-th="Username"
        className="before:w-24 before:inline-block before:font-medium before:text-slate-700 before:content-[attr(data-th)':'] sm:before:content-none flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
      >
        <button
          className="btn btn-primary"
          disabled={isLoading}
          onClick={() => mutate(id)}
        >
          {isLoading ? "Deleting.." : "Remove"}
        </button>
      </td>
    </tr>
  );
}
