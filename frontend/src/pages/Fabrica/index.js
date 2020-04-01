import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import imgFabrica from '../assets/fabrica01.jpg';

export default function Fabrica() {
    return(
        <div className="fabrica-container">
            <section>
                <p>Nosso escopo de atuação abrange toda a cadeia de transformação da embalagem plástica, desde o processo de separação, triagem e reciclagem de materiais plásticos até sua transformação em embalagens plásticas prontas para serem reinseridas na cadeia produtiva novamente.</p>
                <Link to="/orcamento"><button>Faça seu orçamento gratuito</button></Link>
            </section>

            <img src={imgFabrica} alt="Fabrica de Embalagens" />
        </div>
    )
}