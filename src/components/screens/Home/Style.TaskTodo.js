import styled from 'styled-components' //стилизация строк задач//

export const StyleTaskTodo = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
border-radius: 10px;
border: 2px solid #C0C0C0;
margin: 10px 100px;
button {
    color: #E9967A;
    border: 1px solid #E9967A;
    height: 20px;
    width: 20px;
}
button:hover {
    background-color: #E9967A;
    cursor: pointer;
  }
  input {
    height: 20px;
    width: 20px;
    border: 1px solid #E9967A;
  }
  input:hover {
    background-color: #E9967A;
    cursor: pointer;
  }
`
