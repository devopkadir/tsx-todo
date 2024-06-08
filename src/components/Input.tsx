type InputProps = {
  addNewTodo: string;
  setAddNewTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void;
  clearAllTodos: () => void;

};

const Input: React.FC<InputProps> = ({ addNewTodo, setAddNewTodo, addTodo, clearAllTodos }) => {
  return (
    <div>
      <input
        className='mt-10 border-gray-600 border-solid border-[2px] p-1 sm:p-2 pl-6 sm:pl-6 text-2xl w-[90%] mb-5 sm:text-3xl rounded-md capitalize outline-none'
        value={addNewTodo}
        onChange={(e) => setAddNewTodo(e.target.value)}
        type="text"
        placeholder='Type todo..'
      />
      <br /><br />
      <button
        className='rounded-sm hover:bg-green-700 active:bg-green-800 text-white font-bold text-2xl sm:text-4xl p-1 w-32 ml-5 mr-5 bg-green-600 animate-bounce outline-none'
        onClick={addTodo}
      >
        Add
      </button>
      <button
        className='rounded-sm hover:bg-red-700 active:bg-red-800 text-white font-bold p-1 w-32 text-2xl sm:text-4xl bg-red-600 animate-bounce outline-none'
        onClick={clearAllTodos}
      >
        Clear
      </button>
    </div>


  );
};

export default Input;