import React, { useEffect, useState } from 'react';
import logo from '../../assets/img/logo.svg';
import '../../assets/css/perfil.css';
import { FiPower, FiTrash } from 'react-icons/fi';
import { Link, useHistory } from "react-router-dom";
import api from '../../services/api';

function Perfil() {
    const [casos, setCasos] = useState([]);
    const ongId = sessionStorage.getItem("ongId");
    const ongName = sessionStorage.getItem("ongName");

    useEffect(function () {
        api.get("perfil", {
            headers: {
                Authorization: ongId
            }
        }).then(function (res) {
            setCasos(res.data);
        });
    }, [ongId]);
    const history = useHistory();
    async function handleDel(id) {
        try {
            await api.delete('casos/' + id, {
                headers: {
                    Authorization: ongId
                }
            });
            alert("Caso removido com sucesso!");
            setCasos(casos.filter(caso => caso.id !== id));
        } catch (erro) {
            alert("Erro ao deletar :(");
        }
    }
    function logout() {
        sessionStorage.clear();
        history.push("/");
    }
    return (
        <div className="col-lg-11 offset-lg-1 mr-0 ">
            <div className="row col-lg-11 px-0 mx-0 d-flex align-items-center py-2 header">
                <div className="navbar col-lg-12 px-0 my-2">
                    <img src={logo} alt="Logo" className="col-lg-2 mw-75" />
                    <h3 className="col-lg-6 text-dark font-weight-bold">Bem-vindo, {ongName}</h3>
                    <span className="col-lg-4">
                        <Link to="/caso" className="btn btn-danger btn-small col-lg-7">Cadastrar novo caso</Link>
                        <button onClick={logout} type="button" className="col-lg-2 btn">
                            <FiPower size={16} color="#e02041" />
                        </button>
                    </span>
                </div>
            </div>
            <div className="mt-5 col-lg-11 pt-4">
                <div className="mt-5 col-lg-12 px-0 mx-0 pt-3">
                    <h2 className="mb-3 ml-4 text-dark font-weight-bold col-lg-12">Casos cadastrados</h2>
                    <div className="col-lg-12 row px-0 mx-0 d-flex justify-content-around">
                        {casos.map(caso => (
                            <div className="card col-lg-5 mb-4" key={caso.id}>
                                <div className="card-body py-3">
                                    <div className="row ">
                                        <div className="col-lg-11 px-0 mx-0">
                                            <div className="mb-3 col-lg-12 px-0 mx-0">
                                                <label className="font-weight-bold col-lg-4 mb-0 px-0 mx-0">CASO</label>
                                                <p className="col-lg-12 px-0 mb-0 mx-0">{caso.title}</p>
                                            </div>
                                            <div className="mb-3 col-lg-12 px-0 mx-0">
                                                <label className="font-weight-bold col-lg-4 mb-0 px-0 mx-0">DESCRIÇÃO</label>
                                                <p className="col-lg-12 px-0 mb-0 mx-0">{caso.description}</p>
                                            </div>
                                            <div className="col-lg-12 px-0 mx-0">
                                                <label className="font-weight-bold col-lg-4 mb-0 px-0 mx-0">VALOR</label>
                                                <p className="col-lg-12 px-0 mb-0 mx-0">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(caso.value)}</p>
                                            </div>
                                        </div>
                                        <FiTrash size={20} onClick={() => handleDel(caso.id)} className="col-lg-1 px-0 mx-0" />
                                    </div>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Perfil;