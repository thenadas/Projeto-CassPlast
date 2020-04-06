import React, { useState } from 'react';
import './styles.css';

import api from '../../services/api';
import Menu from '../Menu';

export default function Orcamento() {
    const [nome, setNome] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [cidade, setCidade] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    
  async function handleRegister(e) {
        // e.preventDefault();

        const data = {
            nome,
            empresa,
            cidade,
            email,
            mensagem,
        };

        try{
            const response = await api.post('/email', data);

            alert(`Seu ID do email ${response.data.id}`);
        }
        catch (err) {
            alert('Erro ao enviar o email, tente novamente')
        }
    }

    return(
        <React.Fragment>
            <div className="container-all">
            <Menu />
            </div>
            <h1>Faça seu orçamento</h1>
            <div className="orcamento-container">
                <form onSubmit={handleRegister}>
                    <label>Nome </label>
                    <input 
                    placeholder="Digite seu nome" required
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    />
                    <label>Empresa </label>
                    <input
                    placeholder="Digite sua empresa" required
                    value={empresa}
                    onChange={e => setEmpresa(e.target.value)}
                    />
                    <label>Cidade </label>
                    <input
                    placeholder="Digite sua cidade" required
                    value={cidade}
                    onChange={e => setCidade(e.target.value)}
                    />
                    <label>Email </label>
                    <input type="e-mail" placeholder="Digite seu email" required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <label>Mensagem </label>
                    <textarea placeholder="Digite sua mensagem"  required
                    value={mensagem}
                    onChange={e => setMensagem(e.target.value)}
                    />

                    <button type="submit" className="button" value="Enviar">Enviar</button>
                </form>
            </div>
            
        </React.Fragment>
    )
}