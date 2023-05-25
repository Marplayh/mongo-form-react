import React, { useEffect } from "react";
import axios from 'axios';
import { Butao, Container, TabelaStyle } from "./styles";
import {useQuery} from 'react-query'
import { Link } from "react-router-dom";

function Tabela(){
    const formatarData = (data)=>{
     const partes =  data.split('-');
     const dia1 = partes[2]
     const dia = dia1[0] + dia1[1]
     const mes = partes[1]
     const ano = partes[0]
     return `${dia}/${mes}/${ano}`

    }
    
    const {data, isFetching, isError, refetch } = useQuery('clientes', async ()=>{
        try {
            const response = await axios.get('http://localhost:3100/api/clientes');
            return response.data;
          } catch (error) {
            throw new Error('Failed to fetch data');
        }
     })
     const deletarCliente = async (id) =>{
          try{
            await axios.delete(`http://localhost:3100/api/clientes/${id}`);      
            refetch();
          }catch(error){
            console.log('Error: ', error);
          }
            
        }

    useEffect(() => { }, []);
    
    return(
        <Container>
             <TabelaStyle>
            <li className="title-row">
                <span>Nome</span>
                <span>Email</span>
                <span>Data de Nascimento</span>
                <span>Sexo</span>
                <span>Raça</span>
            </li>
            {isError ? (
                <li>Error: Falha ao buscar os dados</li>
            ) :
            isFetching ? (
                <li>Carregando...</li>
            ) : data ?(
                data.map((item, index)=>
                <li className="row" key={index}>
                    <span className="name">{item.name}</span>
                    <span className="email">{item.email}</span>
                    <span>{formatarData(item.data_nascimento)}</span>
                    <span>{item.sexo}</span>
                    <span>{item.raca}</span> 
                    <span className="span-delete-button">
                        <button type="button" className="btn btn-danger delete-btn" onClick={()=>deletarCliente(item._id)}>Deletar</button>
                    </span>
                    <span className="span-edit-button">
                        <Link to={`/edicao/${item._id}`}><button type="button" className="btn btn-success edit-btn">Editar</button></Link>
                    </span>
                </li>) 
            ) : null}
          </TabelaStyle>
          <Butao to="/formulario" type="button" role="button">novo cliente</Butao>
        </Container>  
    );
}

export default Tabela;