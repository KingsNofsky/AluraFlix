import { useState } from "react";
import CampoTexto from "../../CampoTexto";

export default function Formulario(props) {

    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria ] = useState('')
    const [imagem, setImagem ] = useState('')
    const [video, setVideo ] = useState('')
    const [descricao, setDescricao ] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoVideoCadastrado({
            titulo,
            categoria,
            imagem,
            video,
            descricao
        })
        setTitulo('')
        setCargo('')
        setImagem('')
        setVideo('')
        setDescricao('')
    }

    return(
        <section>
            <form onSubmit={aoEditar}>
            <h1>EDITAR CARD:</h1>
            <CampoTexto
                obrigatorio={true}
                label="Titulo"
                placeholder="O que e JavaScript"
                valor={titulo}
                aoAlterado={valor => setTitulo(valor)}
            />

            </form>
        </section>
    )
}