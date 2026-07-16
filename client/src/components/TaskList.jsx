
import Todoitem from "./Todoitem";

const TaskList = ({ list, toggle, Delete }) => {
  return (
    <div>
      {list.map((item) => (
        <Todoitem
          key={item.id}
          id={item.id}
          text={item.text}
          done={item.done}
          toggle={toggle}
          Delete={Delete}
        />
      ))}
    </div>
  );
};

export default TaskList;