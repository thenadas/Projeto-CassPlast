import React from 'react';
import './styles.css';

import Menu from '../Menu/index';
import Informacoes from '../Informacoes/index';
import Fabrica from '../Fabrica/index';
import Banner from '../assets/bannerWidthMenor.jpg';

export default function Entrada(){
    return(
        <React.Fragment>
            <Menu />
            <img className="banner" src={Banner} alt="Banner bobinas plastica" />
            <Informacoes />
            <Fabrica />
        </React.Fragment>
    )
}