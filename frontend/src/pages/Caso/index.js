import React, { useState } from 'react';
import logo from '../../assets/img/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from "react-router-dom";
import api from '../../services/api';

function Caso() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ong_id = sessionStorage.getItem('ongId');
    const history = useHistory();
    async function handler(e){
        e.preventDefault();
        
        const data = {
            title,
            description,
            value
            
        };
        console.log(ong_id);
        try{
            var res = await api.post("casos", data, {
                headers: {
                    Authorization: ong_id
                }
            });
            if(!isNaN(res.data.id)){
                alert("Seu caaso foi cadastrado com sucesso!");
                history.push("/perfil");
            }else{ 
                alert("Ops! Algo deu errado\nTente novamente.");   
            }
            
        }catch(erro){
            alert("Ops! Algo deu errado\nTente novamente.");
        }
    }
    return (
        <div className="col-lg-11 offset-lg-1 row mt-5 px-0 pt-5">
            <div className="col-lg-4 mt-5 px-0 mx-0">
                <img src={logo} alt="logo" className="col-lg-7 mb-5" />
                <h2 className="col-lg-12 my-3">Cadastrar novo caso</h2>
                <p className="mb-5 col-lg-12">
                    Descreva o caso detalhadamente para encontrar 
                    um heroi para resolver isso
                </p>
                <Link to="/perfil" className="row col-lg-12 ml-1">
                    <span >
                        <FiArrowLeft size={16} color="#e02041" className="align-middle" />
                    </span>
                    <p className="ml-2 my-0 text-dark font-weight-bold">Voltar para a home</p>
                </Link>
            </div>
            <div className="col-lg-5 offset-lg-1 mt-5 px-0">
                <form className="col-lg-12 mt-5" onSubmit={handler}>
                    <input type="text" className="form-control form-control-lg mb-2 col-lg-12" 
                    value={title} onChange={e => setTitle(e.target.value)} placeholder="Nome do caso"/>
                    <textarea className="form-control form-control-lg mb-2 col-lg-12" 
                    value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição" rows="3"></textarea>
                    <input type="text" className="form-control form-control-lg mb-2 col-lg-12" 
                    value={value} onChange={e => setValue(e.target.value)} placeholder="Valor"/>
                    <div className="row d-flex justify-content-between px-0 mx-0 col-lg-12">
                        <button className="btn btn-large col-lg-5 border-secondary">Cancelar</button>
                        <button className="btn btn-danger btn-large col-lg-6" type="submit">Cadastrar</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default Caso;