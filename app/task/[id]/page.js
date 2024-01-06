import React from 'react'
import Link from 'next/link';
import prisma from "@/utils/db";
export const getSingleTask = (id) => {
  const task = prisma.task.findUnique({
    where: {
      id
    }
  });
  return task
};
const SingleTaskPage = ({ params }) => {

  return (
    <div className='mb-16'>
      <Link href='/task' className='btn btn-accent'>
        back to tasks
      </Link>
    </div>
  )
}

export default SingleTaskPage