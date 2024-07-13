import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

const DivBanner = styled.section`
    width: 1440px;
    margin: 0 auto;
    height: 744px; 
    background-image: radial-gradient(circle, rgb(0 0 0 / 70%), rgb(0 0 0 / 80%)), url(${props => props.urldefundoimagem});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    border: 4px solid ${props => props.corBorda};
    border-radius: 5px;
    
`;

export default function Banner({ video, categoria }) {
    let primeiroVideo = null;


    if (!video && categoria?.videos?.length > 0) {
        primeiroVideo = categoria.videos[0]; 
    }

    const videoSelecionado = video || primeiroVideo;

    return (
        <>
        <DivBanner urldefundoimagem={videoSelecionado ? videoSelecionado.thumbnail : ''} corBorda={categoria ? categoria.cor : '#0000000'}>
            {videoSelecionado && (
                <Card
                    categoria={videoSelecionado.categoria}
                    titulo={videoSelecionado.titulo}
                    descricao={videoSelecionado.descricao}
                    video={videoSelecionado.video}
                />
            )}
        </DivBanner>
        </>
    );
}
