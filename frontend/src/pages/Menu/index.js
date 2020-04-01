import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import logoImg from '../assets/logo.png';

export default function Menu() {
    return(
        <div className="menu-container">
                <img src={logoImg} alt="Logo CassPlast" />
                <ul>
                    <li>
                        <Link to="/">A Empresa</Link>
                    </li>
                    <li>
                        <Link to="/produtos">Produtos</Link>
                    </li>
                    <li>
                        <Link to="/orcamento">Orçamento</Link>
                    </li>
                    <li>
                        <Link to="/parceiros">Parceiros</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
        </div>
    )
}