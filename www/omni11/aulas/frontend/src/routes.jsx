import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

/* o switch garante que apenas uma rota será acessada por vez */

export default function AppRoutes () {
    return (
        <BrowserRouter>            
            <Routes>
                <Route path="/" element={<Logon />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/incidents/new" element={<NewIncident />} />
            </Routes>
        </BrowserRouter>
    );
}