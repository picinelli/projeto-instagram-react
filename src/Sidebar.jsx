import React from 'react';
import Usuario from './Usuario';
import Sugestoes from './Sugestoes';
import Links from './links';
import Copyright from './Copyright';

export default function Sidebar() {
    return (
        <div className="sidebar">
        <Usuario />

        <Sugestoes />

        <Links />

        <Copyright />
        </div>
    )
}