import { useState } from 'react';
import { Header } from './components/screens/Home/header';
import { InputTodo } from './components/screens/Home/InputTodo';
import { TaskTodo } from './components/screens/Home/TaskTodo';
import { StyleButton } from './components/screens/Home/Style.Button'

function App() {
  const [todo, setTodo] = useState('')
  const [tasks, setTasks] = useState([])
  const [done, setDone] = useState('')

  let copiTasks = tasks //меняем значения в копии//

  const addTask = () => {
    const taskTodo = {
      id : Math.random(),
      value: todo,
      status: false,
    }
    let newTask = [taskTodo,...tasks] //задачи добавляются сверху//
    setTasks(newTask)
    setTodo('') //очищение строки//
  }

  const deleteTask = (id) => {
   let del = tasks.filter(e => e.id !==id) //удаление//
   setTasks(del)
  }

  const togleTask = (id) => {
   let togle = tasks.map(e => e.id === id ? {...e , status : !e.status} : {...e})
   setTasks(togle)
  }

  switch (done) {
  case 'All':
    copiTasks = tasks

  break;
  case 'Active':
    copiTasks=tasks.filter(e => e.status === false)

  break;
  case 'Completed':
    copiTasks=tasks.filter(e => e.status === true)
  break;

  default:
  break;
}

  const taskTodoList = copiTasks.map(e => <TaskTodo id={e.id} 
                                                value={e.value} 
                                                status={e.status}
                                                deleteTask={deleteTask}
                                                togleTask = {togleTask} />)

  return (
    <div className='App'>
      <Header />
      <InputTodo addTask={addTask} todo ={todo} setTodo ={setTodo} />
      {taskTodoList}
      <StyleButton>
      <button onClick={()=> setDone("All")}>All</button>
      <button onClick={()=> setDone("Active")}>Active</button>
      <button onClick={()=> setDone("Completed")}>Completed</button>
    </StyleButton>
    </div>
  );
}

export default App;