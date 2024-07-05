import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaBase from "./pages/PaginaBase";
import NovoVideo from "./pages/NovoVideo";
import NaoEncontrada from "./pages/NaoEncontrada";
import Inicio from "./pages/Inicio";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />} />
                    <Route  path="novo-video" element={<NovoVideo />}/>
                    <Route  path="*" element={<NaoEncontrada />}/>
                </Route>
            </Routes >
        </BrowserRouter >
    )
}