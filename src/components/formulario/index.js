import React, {useState} from 'react'
import axios from 'axios';


import { ButtonSend, Container, FormSexy, Forms, LabelForm, TextInput } from './styles';
import { Link } from 'react-router-dom';
import Cliente from '../../models/Cliente';



function Formulario(){

    const [cliente, setCliente] = useState(Cliente);
    const [sucesso, setSucesso] = useState();
    const handleSubmit = (event) => {
        event.preventDefault();
        try{
            axios.post('http://localhost:3100/api/clientes', cliente)
            setSucesso(true); 
        }catch(error){
            setSucesso(false);
           console.log('msg: ' + error)
        }  
      };
      const verificarCadastro = ()=>{
        if(sucesso === true){
            return (
            <p className='text-success'>Cadastrado com sucesso!</p>
            )
        } else if(sucesso === false){
            return(
                <p className='text-danger'>Erro no cadastro!</p>
            )
        } else{
            return;
        } 
      }
      const handleChange = (event) => {
        const { id, value } = event.target;
        setSucesso(()=>{
            if(value === ''){
              return;
            }
        })
        setCliente((prevData) => ({
          ...prevData,
          [id]: value,
        }));
      };
    
   return( 
      <Container>
         <Forms action='/' onSubmit={handleSubmit} >
            <div className='form1'>
                <LabelForm>Nome:</LabelForm>
                <TextInput id="name" type="text" name='name'  placeholder="Insira seu nome" alt="Digite seu nome" value={cliente.name}  onChange={handleChange}  required/>
                <LabelForm className="titulo">Email:</LabelForm>
                <TextInput id="email" type="text" name='email'  placeholder="Insira seu email" alt="Digite seu email" value={cliente.email}  onChange={handleChange}   required/>
                <LabelForm className="titulo">Data de Nascimento:</LabelForm>
                <TextInput id="data_nascimento" type="date" name='data_nascimento'  alt="Digite sua idade" placeholder="dd/mm/aaaa" value={cliente.data_nascimento}  onChange={handleChange}   required/>
            </div>
            <FormSexy>
                <LabelForm>Sexo:</LabelForm>
                <div className="form-check form-check-inline mt-2">
                    <input className="form-check-input" type="radio"  id="sexo" name='sexo'  value="Masculino" onChange={handleChange}/>
                    <label className="form-check-label" htmlFor="sexo-masculino">Masculino</label>
                </div>
                <div className="form-check form-check-inline mt-2">
                    <input className="form-check-input" type="radio"  id="sexo" name='sexo'  value="Feminino" onChange={handleChange}/>
                    <label className="form-check-label" htmlFor="sexo-feminino">Feminino</label>
                </div>
            </FormSexy>
            <label htmlFor="cor-pele" type="Raça:"></label>
            <select className="form-select form-select-sm mb-3" aria-label=".form-select example" name='raca' id="raca" onChange={handleChange} >
                 <option value="">Selecione uma cor de pele</option>
                 <option value="branca">Branca</option>
                 <option value="negra">Negra</option>
                 <option value="parda">Parda</option>
                 <option value="amarela">Amarela</option>
                <option value="indigena">Indígena</option>
            </select>
            {verificarCadastro()}
            <ButtonSend type="submit" className="butao-editar">Cadastrar</ButtonSend>
            <Link to={'/'}><ButtonSend type="submit" className="butao">Voltar</ButtonSend></Link>
        </Forms>
      </Container>
     
   )
}

export default Formulario;