import { Button, Table } from "../ui";
import { useTasks } from "../../context/TaskContext";
import { useNavigate } from "react-router-dom";
import { PiTrashSimpleLight } from "react-icons/pi";
import { BiPencil } from "react-icons/bi";

function TaskTable({ task }) {
  const { deleteTask } = useTasks();
  const navigate = useNavigate();

  return (
    <Table key={task.id}>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Identificador
            </th>
            <th scope="col" className="px-6 py-3">
              Tarea
            </th>
            <th scope="col" className="px-6 py-3">
              Descripcion
            </th>
            <th scope="col" className="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {task.id}
            </th>
            <td className="px-6 py-4">{task.title}</td>
            <td className="px-6 py-4">{task.description}</td>
            <td className="px-6 py-4">
              <div className="my-2 flex justify-end gap-x-2">
                <Button onClick={() => navigate(`/tasks/${task.id}/edit`)}>
                  <BiPencil className="text-white" />
                </Button>
                <Button
                  className="bg-red-800 hover:bg-red-600"
                  onClick={async () => {
                    if (
                      window.confirm("¿Estás seguro de eliminar esta tarea?")
                    ) {
                      deleteTask(task.id);
                    }
                  }}
                >
                  <PiTrashSimpleLight className="text-white" />
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </Table>
  );
}

export default TaskTable;
