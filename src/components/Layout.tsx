import Task from "./Task";

export default function Layout() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl text-white font-semibold mb-6">
        T O D O
      </h1>

      <div className="sm:max-w-4xl sm:min-w-[560px]">
        <Task title="hellooaaa" completed={false} />
        <Task title="oiii" completed={false} />
        <Task title="oiii" completed={true} />
        <Task title="oiii" completed={false} />
        <Task title="oiii" completed={true} />
      </div>

    </div>
  );
}
