import React from 'react';
import './styles.css';

import Menu from '../Menu';
import logoIvc from '../assets/ivc.png';
import fabricaImg from '../assets/fabrica02.jpg'

export default function Parceiros() {
    return(
        <React.Fragment>
        <Menu />
        <h1>Conheça nossos parceiros</h1>
        <div className="parceiro-container">
            <img className="imgIvc" src={logoIvc} alt="Logo IVC Embalagens" />
            <p>
            A IVC Embalagens iniciou suas atividades em 2000. Sua principal missão sempre foi desenvolver embalagens de qualidade para atender as 
                mais diversas necessidades de seus clientes em diferentes setores.
            Especializada na fabricação de bobinas e sacos de filmes técnicos de Polietileno e com grande foco na produção e utilização de matéria prima reciclada, 
            a IVC Embalagens sempre teve uma visão inovadora no desenvolvimento de novos produtos destinados a atender necessidades específicas no mercado, como por exemplo, 
            a fabricação de plásticos bolhas reciclados de alta resistência.
            </p>
            <img src={fabricaImg} alt="Imagem Fabrica" />
            </div>
        </React.Fragment>
    )
}