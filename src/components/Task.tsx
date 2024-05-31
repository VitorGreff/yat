import { useEffect, useState } from "react";

interface TaskProps {
  title: string;
  completed: boolean;
}

export default function Task(props: TaskProps) {
  const [completed, setCompleted] = useState<boolean>(props.completed);
  const color = completed ? "from-blue-400 to-purple-500 bg-gradient-to-r" : "bg-transparent";

  function toggleCompleted() {
    setCompleted(!completed);
  }

  return (
    <div className="flex gap-6 p-6 bg-gray-800 border border-gray-900 rounded-md">

      <button className={`h-6 w-6 rounded-full ${color} border border-current hover:border-blue-400`}
        onClick={toggleCompleted}>
      </button>
      <div className="text-gray-200">
        {props.title}
      </div>

    </div>
  )
}
