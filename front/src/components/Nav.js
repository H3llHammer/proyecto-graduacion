import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

const Nav = () =>{

    const links = [
        {
            title: "Inicio",
            path: "/"
        },
        {
            title: "Lista de Graduados",
            path: "/lista-de-graduados"
        },
        {
            title: "Calendario de Actividades",
            path: "/calendario"
        },
        {
            title: "Venta de Boletos",
            path: "/venta-de-boletos"
        },
        {
            title: "Mesa y Lugares",
            path: "/mesa-y-lugares"
        }
    ]

    return(
        <div className="Navigation">
            <div className="logo">UNIVERSIDAD DEL VALLE DE MEXICO</div>
            <ul>
                {links.map((route, index) => (
                    <li key={index}>
                        <Link className="link" to={route.path}>
                                {route.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Nav;