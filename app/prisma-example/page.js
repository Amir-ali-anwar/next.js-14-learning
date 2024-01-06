import prisma from '@/utils/db'
const prismaHandler = async () => {
  prisma.task.create({
    data: {
      content: 'Wake up'
    }
  })
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
  return allTasks
}
const page = async () => {
  const tasks = await prismaHandler()
  if (tasks.length === 0) {
    return <h2 className='mt-8 font-medium text-lg'>No tasks to show...</h2>;
  }

  return (
    <div>
      <h1 className='text-7xl'>Prisma Example</h1>
      {tasks?.map((task)=>(
        <h2 key={task.id}>{task.content}</h2>
      ))}
    </div>
  )
}

export default page