'use client';
import {createTask} from '@/utils/action'
import { useEffect } from 'react';

import {useFormStatus,useFormState} from 'react-dom'
import toast from 'react-hot-toast';

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
const initialState = {
  message: null,
};
const TaskFormCustom = () => {
  const [state,formAction]=useFormState(createTask,initialState)
  console.log(state.message);
  useEffect(() => {
    if(state.message==='error'){
      toast.error('there was an error')
      return 
    }
    if(state.message){
      toast.success('Task Created')
    }
  }, [state])
  return (
    <form action={formAction}>
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
