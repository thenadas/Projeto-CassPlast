import React from 'react';
import './styles.css';

import Menu from '../Menu';

import produto01 from '../assets/produto01.jpg'
import produto02 from '../assets/produto02.jpg'
import produto03 from '../assets/produto03.jpg'
import produto04 from '../assets/produto04.jpg'
import produto05 from '../assets/produto05.jpg'
import produto06 from '../assets/produto06.jpg'
import produto07 from '../assets/produto07.jpg'
import produto08 from '../assets/produto08.jpg'
import produto09 from '../assets/produto09.jpg'
import produto10 from '../assets/produto10.jpg'
import produto11 from '../assets/produto11.jpg'
import produto12 from '../assets/produto12.jpg'
import produto13 from '../assets/produto13.jpg'
import produto14 from '../assets/produto14.jpg'
import produto15 from '../assets/produto15.jpg'
import produto16 from '../assets/produto16.jpg'
import produto17 from '../assets/produto17.jpg'
import produto18 from '../assets/produto18.jpg'
import produto19 from '../assets/produto19.jpg'
import produto20 from '../assets/produto20.jpg'
import produto21 from '../assets/produto21.jpg'
import produto22 from '../assets/produto22.jpg'
import produto23 from '../assets/produto23.jpg'

export default function Produtos() {
    return(
        <React.Fragment>
            <Menu />
            <h1>Catálogo de produto</h1>
            <p>Agro / Textil / Alimentos / Química / Metalúrgicas / Transportadoras / Moveleira</p>
            <div className="produto-container">
                <section>
                    <img src={produto01} alt="Sacos e Bobinas PEBD Recicladas" />
                    <span>Sacos e Bobinas PEBD Recicladas</span>
                </section>
                <section>
                    <img src={produto02} alt="Bobinas PEBD e PEAD Virgens" />
                    <span>Bobinas PEBD e PEAD Virgens</span>
                </section>
                <section>
                    <img src={produto03} alt="Bobinas PEBD e PEAD Virgens" />
                    <span>Bobinas PEBD e PEAD Virgens</span>
                </section>
                <section>
                    <img src={produto20} alt="Sacos PEBD e PEAD Virgens" />
                    <span>Sacos PEBD e PEAD Virgens</span>
                </section>
                <section>
                    <img src={produto14} alt="Sacos PEBD e PEAD Virgens" />
                    <span>Sacos PEBD e PEAD Virgens</span>
                </section>
                <section>
                    <img src={produto23} alt="Sacos PEBD e PEAD Virgens" />
                    <span>Sacos PEBD e PEAD Virgens</span>
                </section>
                <section>
                    <img src={produto17} alt="Bobinas Plasticas" />
                    <span>Bobinas Plasticas</span>
                </section>
                <section>
                    <img src={produto04} alt="Forro para caixas plasticas ou papelão" />
                    <span>Forro para caixas plasticas ou papelão</span>
                </section>
                <section>
                    <img src={produto05} alt="Forro para caixas plasticas ou papelão" />
                    <span>Forro para caixas plasticas ou papelão</span>
                </section>
                <section>
                    <img src={produto09} alt="Capa Palette" />
                    <span>Capa Palette</span>
                </section>
                <section>
                    <img src={produto10} alt="Capa Palette" />
                    <span>Capa Palette</span>
                </section>
                <section>
                    <img src={produto06} alt="Saco plasticos para Silagem" />
                    <span>Saco plasticos para Silagem</span>
                </section>
                <section>
                    <img src={produto07} alt="Sacos plasticos para Maravalha" />
                    <span>Sacos plasticos para Maravalha</span>
                </section>
                <section>
                    <img src={produto11} alt="Saco para resíduo infectante" />
                    <span>Saco para resíduo infectante</span>
                </section>
                <section>
                    <img src={produto12} alt="Sacos PEBD com aditivo biodegradavel" />
                    <span>Sacos PEBD com aditivo biodegradavel</span>
                </section>
                <section>
                    <img src={produto08} alt="Sacos Plásticos Para Ensacar Cachos De Bananas" />
                    <span>Sacos Plásticos Para Ensacar Cachos De Bananas</span>
                </section>
                <section>
                    <img src={produto13} alt="Lona PEBD Aditivada VCI" />
                    <span>Lona PEBD Aditivada VCI</span>
                </section>
                <section>
                    <img src={produto18} alt="Sacos aditivados com VCI" />
                    <span>Sacos aditivados com VCI</span>
                </section>
                <section>
                    <img src={produto19} alt="Lonas Plasticas em PEBD" />
                    <span>Lonas Plasticas em PEBD</span>
                </section>
                <section>
                    <img src={produto21} alt="Sacos PEBD e PEAD Virgens" />
                    <span>Sacos PEBD e PEAD Virgens</span>
                </section>
                <section>
                    <img src={produto22} alt="Sacolas Lisa e Personalizadas(PEBD e PEAD)" />
                    <span>Sacolas Lisa e Personalizadas(PEBD e PEAD)</span>
                </section>
                <section>
                    <img src={produto15} alt="Sacos para Gelo" />
                    <span>Sacos para Gelo</span>
                </section>
                <section>
                    <img src={produto16} alt="Sacos para Gelo" />
                    <span>Sacos para Gelo</span>
                </section>
            </div>
        </React.Fragment>
    )
}