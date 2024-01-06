import React from "react";
import { revalidatePath } from "next/cache";
import prisma from "@/utils/db";
const createTask = async (formData) => {
  "use server";
  const content = formData.get("content");
  const task = await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath("/task");
  return task;
};
const TaskFormCustom = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text "
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
        />
        <button type="submit" className="btn btn-primary join-item">
          create task
        </button>
      </div>
    </form>
  );
};

export default TaskFormCustom;
