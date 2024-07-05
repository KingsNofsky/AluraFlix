import { Outlet } from "react-router";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";



export default function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <Outlet />
            <Rodape />
        </main>
    )
}