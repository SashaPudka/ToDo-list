import styled from 'styled-components' //стилизация кнопок снизу all, active, completed//

export const StyleButton = styled.div`
display: flex;
justify-content: space-between;
text-align: center;
margin: 0 400px;
button {
    padding: 10px;
    border-radius: 10px;
    color: #808080;
    border: 1px solid #E9967A;
}
button:hover {
    background-color: #aaa;
    cursor: pointer;
  }
`
