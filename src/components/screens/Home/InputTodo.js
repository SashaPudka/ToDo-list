import { StyleInputTodo } from './Style.InputTodo'

export const InputTodo = (props) => {
return(
    <StyleInputTodo>
    <input value = {props.todo}
      onChange={(e)=> props.setTodo(e.target.value)}/>
    <button onClick={()=> props.addTask() }>Добавить задачу</button>
    </StyleInputTodo>
)
}
