import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Entrada from './pages/Entrada';
import Produtos from './pages/Produtos';
import Orcamento from './pages/Orcamento';
import Parceiros from './pages/Parceiros';
import Contato from './pages/Contato';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Entrada} />
                <Route path="/produtos" component={Produtos} />
                <Route path="/orcamento" component={Orcamento} />
                <Route path="/parceiros" component={Parceiros} />
                <Route path="/contato" component={Contato} />
            </Switch>
        </BrowserRouter>
    )
}