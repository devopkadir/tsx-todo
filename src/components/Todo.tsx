// Types
import { Todos } from '../types/Type';

// Icons
import { FaDeleteLeft } from 'react-icons/fa6';

type TodoProps = {
  todos: Todos[];
  clearOneTodo: (id: number) => void;
};

const Todo: React.FC<TodoProps> = ({ todos, clearOneTodo }) => {
  return (
    <div className='mt-10'>
      {todos.map((todo, i) => (
        <div
          className='flex items-center justify-center capitalize text-white text-2xl sm:text-3xl'
          key={i}
        >
          <span className='mr-5'>
            {todo.text}
          </span>
          <FaDeleteLeft
            className='cursor-pointer'
            onClick={() => clearOneTodo(todo.id)}
          />
        </div>
      ))
      }
    </div >
  );
};

export default Todo;