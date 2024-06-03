import { useEffect, useState } from "react";
import Task from "./Task";
export default function Layout() {
  interface TaskProps {
    title: string;
    completed: boolean;
  }
  const [tasks, setTasks] = useState<TaskProps[]>([])
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    setTasks(tasks)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const taskValue = e.currentTarget.value
      if (!taskValue) return

      setTasks([...tasks, { title: taskValue, completed: false }])
      localStorage.setItem('tasks', JSON.stringify([...tasks, { title: taskValue, completed: false }]))
      e.currentTarget.value = ''
    }
  }

  const completeTask = (index: number) => {
    const newTasks = [...tasks]
    newTasks[index].completed = !newTasks[index].completed
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed))
    localStorage.setItem('tasks', JSON.stringify(tasks.filter(task => !task.completed)))
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-white font-semibold mb-6 mt-12">
        T O D O
      </h1>

      <div className="sm:max-w-4xl sm:min-w-[560px]">
        <div className="flex gap-6 p-4 bg-gray-800 border border-gray-700 rounded-sm mb-6">
          <button className={`h-6 w-6 rounded-full border border-current `}>
          </button>
          <input type="text"
            className="bg-gray-800 border-0 outline-none text-gray-200 w-full"
            placeholder="Create a new todo..."
            onKeyDown={handleKeyDown}
          />
        </div>

        {tasks.map((task, index) => (
          <Task key={index} index={index} title={task.title} completed={task.completed} completeTaks={completeTask} />
        ))}

        <div className="flex justify-between gap-4 p-4 bg-gray-800">
          <span className="text-gray-500 font-light">
            {tasks.length} items left
          </span>
          <button
            className="items-end text-gray-500 font-light hover:text-white"
            onClick={clearCompleted}
          >
            Clear Completed
          </button>
        </div>

        <span className="flex items-center justify-center mt-6 mb-8 text-gray-500">
          Design inspired by @frontendmentor
        </span>

      </div>
    </div >
  );
}
