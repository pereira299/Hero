import React, { useState } from 'react';
import logo from '../../assets/img/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api.js";

function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();
    async function handler(e){
        e.preventDefault();

        const data = {
            name, 
            email,
            whatsapp,
            city,
            uf
        };
        try{
            var res = await api.post("ongs", data);
            alert("Seu ID de acesso é: "+ res.data.id);
            history.push("/");
        }catch(erro){
            alert("Ops! Algo deu errado\nTente novamente.");
        }
    }
    return (
        <div className="col-lg-11 offset-lg-1 row mt-5 px-0 pt-5">
            <div className="col-lg-4 mt-5 px-0 mx-0">
                <img src={logo} alt="logo" className="col-lg-7 mb-5" />
                <h2 className="col-lg-12 my-3">Cadastro</h2>
                <p className="mb-5 col-lg-12">
                    Faça seu cadastro, entre na plataforma e ajude
                    pessoas a encontrar os casos da sua ONG
                </p>
                <Link to="/" className="row col-lg-12 ml-1">
                    <span >
                        <FiArrowLeft size={16} color="#e02041" className="align-middle" />
                    </span>
                    <p className="ml-2 my-0 text-dark font-weight-bold">Voltar para o login</p>
                </Link>
            </div>
            <div className="col-lg-5 offset-lg-1 mt-5 px-0">
                <form className="col-lg-12 mt-5" onSubmit={handler}>
                    <input type="text" className="form-control form-control-lg mb-2 col-lg-12" 
                    placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)}/>
                    <input type="text" className="form-control form-control-lg mb-2 col-lg-12" 
                    placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type="text" className="form-control form-control-lg mb-2 col-lg-12" 
                    placeholder="WhatsApp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}/>
                    <div className="row col-lg-12 input-group px-0 mx-0 mb-2">
                        <input type="text" className="form-control form-control-lg px-4 col-lg-10" 
                        placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)}/>
                        <input type="text" className="form-control form-control-lg col-lg-2" 
                        placeholder="UF" value={uf} onChange={e => setUf(e.target.value)}/>
                    </div>
                    <button className="btn btn-danger btn-large btn-block">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;