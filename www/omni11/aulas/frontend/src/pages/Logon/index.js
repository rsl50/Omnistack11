import React from 'react';

import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
//Adicionando ícone login
import { FiLogIn } from 'react-icons/fi';

export default function Logon() {
    return (
        <div className="class-logon-contiainer">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID"/>
                    <button type="submit">Entrar</button>
                    <a href="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </a>
                </form>
            
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    )
}