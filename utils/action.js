"use server";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';
import prisma from "@/utils/db";
export const createTask = async (formData) => {
    const content = formData.get("content");
    const task = await prisma.task.create({
        data: {
            content,
        },
    });
    revalidatePath("/task");
    return task;
};
export const editTask = async (formData) => {
    const id = formData.get("id");
    const content = formData.get("content");
    const completed = formData.get("completed");
    await prisma.task.update({
        where: {
            id,
        },
        data: {
            content,
            completed: completed === "on" ? true : false,
        },
    });
    redirect('/task')
};

export const deleteTask = async (formData) => {

    const id = await formData.get("id");
    const result = await prisma.task.delete({
        where: { id },
    });
    revalidatePath('/task')
    return result;
};

export const getAllTasks = () => {
    const task = prisma.task.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return task
  };