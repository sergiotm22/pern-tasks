import { useEffect } from "react";
import TaskCard from "../components/tasks/TaskCard";
import TaskTable from "../components/tasks/TaskTable";
import { useTasks } from "../context/TaskContext";

function TaskPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  if (tasks.length === 0)
    return (
      <div className="flex justify-center items-center h-[calc(100vh-10rem)]">
        <h1 className="text-3xl font-bold">No tasks found</h1>
      </div>
    );

  return (

      tasks.map((task) => (
        <TaskTable task={task} key={task.id} />
      ))

  );
}

export default TaskPage;