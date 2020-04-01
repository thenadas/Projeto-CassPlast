import React from 'react';
import './styles.css';
import { FiMail, FiPhone, FiMapPin, FiAlertCircle } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import Iframe from 'react-iframe'

import Menu from '../Menu/index';
import Banner from '../assets/banner02ComFaixa.jpg';

export default function Contato(){
    return(
        <React.Fragment>
            <Menu />
            <img className="banner" src={Banner} alt="Banner bobinas plastica" />
            <h1>Contato</h1>
            <section className="contato-container">
                    <FiMail size={40} color="#6BB49D"  style={{ marginBottom: 30}} />
                    <FiPhone size={40} color="#6BB49D" style={{ marginBottom: 30}} />
                    <FaInstagram size={40} color="#6BB49D" style={{ marginBottom: 30}} />
                <p>Email: cassplast@gmail.com</p>
                <p>Telefone: (11) 96865-1802</p>
                <p>Siga-nos : @cassarimarcio</p>
            </section>

            {/* <h1>Agenda uma visita</h1> */}
            <div className="agenda-container">
                <FiMapPin size={40} color="#6BB49D" style={{ marginBottom: 30}}/>
                <FiAlertCircle size={40} color="#6BB49D" style={{ marginBottom: 30}}/>
                <p>R. Dr. Silvio Dante Bertacchi Nº8 - Sala 1 <br /> Vila Sonia - SP</p>
                <p>Funcionamento <br />Seg - Sex 8:00 as 18:00 <br />Sabado e Domingo - FECHADO</p>
            </div>

                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.265331217781!2d-46.73029118538303!3d-23.59481536871284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce56eca9e33929%3A0x61e1a8a6642f88c2!2sRua%20Dr.%20S%C3%8Dlvio%20Dante%20Bertacchi%2C%208%20-%20Vila%20Sonia%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005624-001!5e0!3m2!1spt-BR!2sbr!4v1585618638740!5m2!1spt-BR!2sbr" width="1345" height="400" frameborder="0" style={{ border:0 }} allowfullscreen="" aria-hidden="false" tabindex="0" />
        </React.Fragment>
    )
}
