import React from 'react'
const editTask=async (formData)=>{
  "use server";
  const id = formData.get('id');
  const content = formData.get('content');
  const completed = formData.get('completed');

}
const TaskEditForm = ({task}) => {
  const { id, completed, content}= task
  return (
    <form className='max-w-sm p-12 border border-base-300 rounded-lg' action={editTask}>
       <input type='hidden' name='id' value={id} />
      <input
        type='text'
        required
        defaultValue={content}
        name='content'
        className='input input-bordered w-full'
      />
      <div className='form-control my-4'>
        <label htmlFor='completed' className='label cursor-pointer'>
          <span className='label-text'>completed</span>
          <input
            type='checkbox'
            defaultChecked={completed}
            id='completed'
            name='completed'
            className='checkbox checkbox-primary checkbox-sm'
          />
        </label>
      </div>
    </form>
  )
}

export default TaskEditForm