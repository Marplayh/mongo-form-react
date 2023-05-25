import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const TabelaStyle = styled.ul`
  display: table;
  width: 70%;
  border-collapse: collapse; 
  margin-left: 100px;

  li.title-row{
  display: table-row;

  
}

li.title-row span{
  display: table-cell;
  font-weight: 700;
  color: white;
  font-size: large;
  padding: 5px;
  border: 1px solid white;
  background-color: mediumseagreen;
}
li.row {
  display: table-row;
}

li.row span {
  display: table-cell;
  padding: 5px;
  background-color: #ccc;
  border: 1px solid white;
  max-width: 400px; /* Defina um valor adequado para a largura máxima */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
 
}
.name, .email{
  overflow: hidden; /* ou outro valor adequado, como "scroll" ou "auto" */
  text-overflow: ellipsis; /* para exibir reticências quando o texto estiver muito longo */
  white-space: nowrap;
  &:hover{
    overflow: visible;
  }
}
li.row span.span-delete-button button {
  background-color: rgba(255, 0, 0, 0.642);
  color: #fff;
}
li.row span.span-edit-button button {
  background-color: var(--buttonColor);
  color: #fff;
}

li.row span.span-delete-button{
  border: none;
  background-color: transparent;
  &:focus{
    background-color: var(--frontEnd);
  } 
}
li.row span.span-edit-button{
  border: none;
  background-color: transparent;
  &:focus{
    background-color: var(--buttonColorHover);
  }
}
`;

export const Butao = styled(Link)`
   background-color: var(--buttonColor);
   color: white;
   text-decoration: none;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 5px;
   width: 100px;
   height: 40px;
   &:hover{
    background-color: var(--buttonColorHover);
   }
`