
import { useEffect, useState } from "react";
import todo from "../assets/todo_icon.png";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const Todolist = () => {
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);

  const addTask = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      done: false,
    };

    setList((prev) => [...prev, newTodo]);
  };

  const toggle = (id) => {
    setList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const Delete = (id) => {
    const task = list.find((item) => item.id === id);

    if (!task.done) {
      alert("Please complete the task first.");
      return;
    }

    setList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white w-11/12 max-w-md rounded-xl p-7 min-h-[550px]">
      <div className="flex items-center gap-2">
        <img src={todo} className="w-8" alt="" />
        <h1 className="text-3xl font-bold">To-Do List</h1>
      </div>

      <TaskInput addTask={addTask} />

      <TaskList
        list={list}
        toggle={toggle}
        Delete={Delete}
      />
    </div>
  );
};

export default Todolist;