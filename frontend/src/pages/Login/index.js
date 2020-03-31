import React, { useState } from 'react';
import '../../assets/css/login.css';
import logo from '../../assets/img/logo.svg';
import hero from '../../assets/img/heroes.png';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from "react-router-dom";
import api from '../../services/api';

function Login(e) {
    const [id, setId] = useState('');
    const history = useHistory();
    async function handler(e){
        e.preventDefault();
        
        try {
            const res = await api.post("sessao", {id});

            sessionStorage.setItem("ongId", id);
            sessionStorage.setItem("ongName", res.data.name);
            history.push("/perfil");
        } catch (error) {
            alert("Ops! algo deu errado :(");
        }

    }
    return (
        <div className="row col-lg-11 offset-lg-1 mt-5">
            <div className="col-lg-4">
                <img src={logo} alt="logo" className="mb-5" />
                <form className="mt-5 col-lg-12" onSubmit={handler}>
                    <h2 className="mb-3">Faça seu login</h2>
                    <input className="form-control form-control-lg mb-2" placeholder="Sua ID"  value={id} onChange={e => setId(e.target.value)}/>
                    <button className="btn btn-danger btn-block btn-large mb-5" type="submit">Entrar</button>

                    <Link to="/cadastro" className="row col-lg-12 align-top">
                        <span>
                            <FiLogIn size={16} color="#e02041" className="align-middle" />
                        </span>
                        <p className="ml-1 my-0 text-dark font-weight-bold">Não tenho cadastro</p>
                    </Link>
                </form>
            </div>
            <div className="col-lg-5 offset-lg-1">
                <img src={hero} alt="Hero" />
            </div>
        </div>
    )
}

export default Login; 