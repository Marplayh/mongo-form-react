import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


export const Forms = styled.form`
    width:400px;
    height:500px;
    background:#e6e6e6;
    border-radius:8px;
    box-shadow:0 0 40px -10px #000;
    max-width:calc(100vw - 40px);
    padding:20px 30px;
    box-sizing:border-box;
    font-family:'Montserrat',sans-serif;
    position:relative;
    .form1{
        display: flex;
        flex-direction: column;
    }
    .form1 ::placeholder{
       font-size: small;
    }
`;

export const TextInput = styled.input`
        width:100%;
        padding:5px;
        box-sizing:border-box;
        margin-bottom: 10px;
        background:none;
        outline:none;
        resize:none;
        border:0;
        font-family:'Montserrat',sans-serif;
        transition:all .3s;
        border-bottom:2px solid #bebed2;
        &:focus{
            border-bottom:2px solid var(--blackLighter)
        }
`;

export const LabelForm = styled.label`
   font-size: medium;
   font-weight: 600;
`;

export const FormSexy = styled.div`
   display: flex;
   flex-direction: column;
`;

export const ButtonSend = styled.button`
   border: none;
   background-color: var(--buttonColor);
   color: white;
   font-weight: 600;
   margin-right: 5px;
   .butao-editar{
      font-weight: 500;
   }
   &:hover{
    cursor: pointer;
    background-color: var(--buttonColorHover);
    transition: 1s;
   }
`;