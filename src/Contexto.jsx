import { createContext, useEffect, useState } from "react";
import { listarVideos } from "./servicos/videos.servicos";
import { listarCategoria } from "./servicos/categorias.servicos";


export const Contexto = createContext()

export function ProvedorContexto({ children }) {
    const [videos, setVideos] = useState()
    const [categorias, setCategorias] = useState()
    const [atualizar, setAtualizar] = useState(1)

    useEffect(() => {
        listarVideos("/videos", setVideos);
    }, [atualizar]);

    useEffect(() => {
        listarCategoria("/categorias", setCategorias)
    }, [atualizar])

    if (videos && categorias) {
        return (
            <Contexto.Provider
                value={{
                    videos: videos.data,
                    categorias: categorias.data,
                    recarregar: setAtualizar
                }}
            >
                {children}
            </Contexto.Provider>
        )
    }
}