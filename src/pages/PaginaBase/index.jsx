import { Outlet } from "react-router";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import Modal from "../../componentes/Modal";
import { useState } from "react";



export default function PaginaBase() {

    return (
        <main>
            {/* <Modal /> */}
            <Cabecalho />
            <Outlet />
            <Rodape />

        </main>
    )
}