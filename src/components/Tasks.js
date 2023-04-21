import Task from './Task'

const Tasks = ({ tasks, onDelete, toggleReminder }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleReminder={toggleReminder}
        />
      ))}
    </>
  )
}

export default Tasks
