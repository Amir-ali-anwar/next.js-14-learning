import {deleteTask} from '@/utils/action'
const DeleteTask = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-xs btn-error"> delete</button>
    </form>
  );
};

export default DeleteTask;
