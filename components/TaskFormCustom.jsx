'use client';
import {createTask} from '@/utils/action'
import {useFormStatus} from 'react-dom'
const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='btn join-item btn-primary'
      disabled={pending}
    >
      {pending ? 'please wait... ' : 'create task'}
    </button>
  );
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
       <SubmitButton />
      </div>
    </form>
  );
};

export default TaskFormCustom;
