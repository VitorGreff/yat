import { checkIcon } from "@/icons";
interface TaskProps {
  index: number;
  title: string;
  completed: boolean;
  completeTaks: (index: number) => void;
}

export default function Task(props: TaskProps) {
  const color = props.completed ? "from-blue-400 to-purple-500 bg-gradient-to-r" : "bg-transparent";

  return (
    <div className="flex gap-6 p-6 bg-gray-800 border border-gray-700">
      {props.completed ? (
        <button className={`h-6 w-6 rounded-full ${color} border border-current hover:border-blue-400`}
          onClick={() => props.completeTaks(props.index)}>
          {checkIcon()}
       </button>
      ) : (
        <button className={`h-6 w-6 rounded-full ${color} border border-current hover:border-blue-400`}
          onClick={() => props.completeTaks(props.index)}>
        </button>
      )}
      <div className="text-gray-200">
        {props.title}
      </div>
    </div>
  )
}
