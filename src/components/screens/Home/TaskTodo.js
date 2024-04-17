import { StyleTaskTodo } from './Style.TaskTodo'

export const TaskTodo = (props) => {
  return(
    <StyleTaskTodo key={props.id}>
        <input type={'checkbox'} onClick={() => props.togleTask(props.id)} defaultChecked={props.status}></input>
        <p style={props.status ? {textDecoration: 'line-through'} : {textDecoration: 'none'} }>{props.value}</p>
        <button onClick={()=> props.deleteTask(props.id)}></button>
    </StyleTaskTodo>
  )
}

//возникла проблема при удалении задачи на кнопку справа: не удалось крестик поставить на кнопке//