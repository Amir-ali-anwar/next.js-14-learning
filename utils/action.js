"use server";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';
import prisma from "@/utils/db";
import { z } from 'zod';
export const createTask = async (prevState, formData) => {
    const content = formData.get("content");
    console.log({ content });
    const TaskSchema = z.object({
        content: z.string().min(4)
    })
    try {
        TaskSchema.parse({ content })
        await prisma.task.create({
            data: {
                content,
            },
        });
        revalidatePath("/task");
        return { message: "success" };
    } catch (error) {
        console.log({ error });
        return { message: 'Error' }
    }

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