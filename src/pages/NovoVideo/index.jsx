import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Formulario from '../../componentes/Formulario';

const NovoStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap:47px;
    margin: 0 auto;
    max-width: 1360px;
    color: #fff;
    font-family: Roboto;
    text-align: center;
    section {
    }
    p {
        font-size: 20px;
        font-weight: 300;
        text-transform: uppercase;
    }
    div {
        display: flex;
        width: 1172px;
        margin: 0 auto;
        border: 2px solid #6b6b6b50;
        border-left:none;
        border-right:none;
    }
`;

const Titulo = styled.h1`
    margin: 0;
    padding-top: 60px;
    font-size: 60px;
    font-weight: bold;
`;

export default function NovoVideo() {
    const [categorias, setCategorias] = useState(['FRONT END', 'BACK END', 'MOBILE']);

    const aoCadastrar = (novoVideo) => {
        console.log('Novo vídeo cadastrado:', novoVideo);
        // Você pode adicionar lógica adicional aqui, como atualizar a lista de vídeos
    };

    return (
        <NovoStyle>
            <section>
                <Titulo>NOVO VÍDEO</Titulo>
                <p>Complete o formulário para criar um novo card de vídeo.</p>
            </section>
            <div>
                <h2>Criar Card</h2>
            </div>
            <Formulario aoCadastrar={aoCadastrar} categorias={categorias} />
        </NovoStyle>
    );
}
