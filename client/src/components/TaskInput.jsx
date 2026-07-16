import { useRef } from "react";


const TaskInput = ({ addTask }) => {
  const inputRef = useRef();

  const handleAdd = () => {
    const value = inputRef.current.value.trim();

    if (!value) return;

    addTask(value);
    inputRef.current.value = "";
  };

  return (
    <div className="flex bg-gray-200 rounded-full my-6">
      <input
        ref={inputRef}
        className="flex-1 bg-transparent outline-none pl-6 h-14"
        placeholder="Add Your Task"
      />

      <button
        onClick={handleAdd}
        className="bg-green-600 text-white rounded-full w-32"
      >
        ADD +
      </button>
    </div>
  );
};

export default TaskInput;