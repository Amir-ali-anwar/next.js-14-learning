import React from 'react'
import Link from 'next/link';
import prisma from "@/utils/db";
import TaskEditForm from '@/components/TaskEditForm';

export const getSingleTask = (id) => {
  const task = prisma.task.findUnique({
    where: {
      id
    }
  });
  return task
};
const SingleTaskPage = async ({ params }) => {
  const task =  await getSingleTask(params.id)
  return (
    <>
      <div className='mb-16'>
        <Link href='/task' className='btn btn-accent'>
          back to tasks
        </Link>
      </div>
      <TaskEditForm task={task} />
    </>
  )
}

export default SingleTaskPage