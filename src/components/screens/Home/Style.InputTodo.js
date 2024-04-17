import styled from 'styled-components' //стилизация кнопки ввода задачи//

export const StyleInputTodo = styled.div`
input {
  height: 30px;
  border-radius: 20px;
  justify-content: space-around;
  border: 2px solid #E9967A;
  margin: 0 0 0 100px;
}
input: hover {
  cursor: pointer;
}
button{
  padding: 10px;
  border-radius: 10px;
  color: #808080;
  border: 1px solid #E9967A;
  margin: 0 10px;
}
button:hover {
  background-color: #aaa;
  cursor: pointer;
}
`