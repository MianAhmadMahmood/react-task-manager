
import tick from "../assets/tick.png";
import nottick from "../assets/not_tick.png";
import del from "../assets/delete.png";

const Todoitem = ({ id, text, done, toggle, Delete }) => {
  return (
    <div className="flex items-center justify-between my-3">

      <div
        onClick={() => toggle(id)}
        className="flex items-center flex-1 cursor-pointer"
      >
        <img
          src={done ? tick : nottick}
          alt=""
          className="w-7"
        />

        <p
          className={`ml-4 ${
            done ? "line-through text-gray-400" : "text-slate-700"
          }`}
        >
          {text}
        </p>
      </div>

      <img
        src={del}
        alt=""
        className="w-4 cursor-pointer"
        onClick={() => Delete(id)}
      />
    </div>
  );
};

export default Todoitem;