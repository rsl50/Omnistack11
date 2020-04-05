import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';

/* o switch garante que apenas uma rota será acessada por vez */

export default function Routes () {
    return (
        <BrowserRouter>            
            <Switch>
                <Route path="/" component={Logon} />
            </Switch>
        </BrowserRouter>
    );
}