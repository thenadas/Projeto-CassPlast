import React from 'react';
import './styles.css';
import { FaDollarSign, FaInfo } from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';

export default function Informacoes() {
    return(
        <div className="info-container">
            <section>
                <FaInfo size={40} color="#6BB49D" style={{ marginBottom: 20 }} />
                <p>Especializada na fabricação de bobinas e sacos de filmes técnicos de Polietileno</p>
            </section>
            <section>
                <FaDollarSign size={40} color="#6BB49D" style={{ marginBottom: 20 }} />
                <p>Faça seu orçamento sem compromisso. Com preços direto dos fabricantes</p>
            </section>
            <section>
                <FiAlertCircle size={40} color="#6BB49D" style={{ marginBottom: 20 }} />
                <p>Agro / Textil / Alimentos / Química / Metalúrgicas / Transportadoras / Moveleira</p>
            </section>
        </div>
    )
}