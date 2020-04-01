import React from 'react';
import './styles.css';

import Menu from '../Menu';

export default function Orcamento() {
    return(
        <React.Fragment>
            <div className="container-all">
            <Menu />
            </div>
            <h1>Faça seu orçamento</h1>
            <div className="orcamento-container">
                <form>
                    <label>Nome </label>
                    <input type="text" name="Nome" placeholder="Digite seu nome" required/>
                    <label>Empresa </label>
                    <input type="text" name="Empresa" placeholder="Digite sua empresa" required/>
                    <label>Cidade </label>
                    <input type="text" name="Cidade" placeholder="Digite sua cidade" required/>
                    <label>Email </label>
                    <input type="e-mail" name="Email" placeholder="Digite seu email" required/>
                    <label>Mensagem </label>
                    <textarea name="Mensagem" placeholder="Digite sua mensagem" required />

                    <button type="button" className="button" value="Enviar">Enviar</button>
                </form>
            </div>
            
        </React.Fragment>
    )
}