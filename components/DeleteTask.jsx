import React from "react";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
const deleteTask = async (formData) => {
  "use server";
  const id = await formData.get("id");
  const result = await prisma.task.delete({
    where: { id },
  });
  revalidatePath('/task')
  return result;
};
const DeleteTask = ({ id }) => {
  console.log({ id });
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-xs btn-error"> delete</button>
    </form>
  );
};

export default DeleteTask;
