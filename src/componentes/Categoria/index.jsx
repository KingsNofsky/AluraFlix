import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cards from '../Cards';
import Banner from '../Banner';
import { listarVideos, deletarVideo as apiDeletarVideo } from '../../lib/axios';
import categoriasData from '../../json/categoria.json';

const Container = styled.div`
    max-width: 1460px;
    margin: 0 auto;
    position: relative;
    bottom: 744px;
    z-index: 1;
`;

const CategoriaStyle = styled.div`
    font-family: Roboto;
    color: #fff;
    h1 {
        background-color: ${props => props.corDeFundo};
        max-width: 432px;
        height: 70px;
        display: flex;
        border-radius: 15px;
        font-size: 32px;
        justify-content: center;
        align-items: center;
        margin: 30px 0 -20px 30px;
        position: relative;
        top: -50px;
    }
`;

const AreaCard = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
`;

export default function Categoria() {
    const [videos, setVideos] = useState([]);
    const [videoSelecionado, setVideoSelecionado] = useState(null);

    useEffect(() => {
        listarVideos('/videos', setVideos);
    }, []);

    useEffect(() => {
        if (videos.length > 0) {
            setVideoSelecionado(videos[0]);
        }
    }, [videos]);

    const handleCardClick = (video) => {
        setVideoSelecionado(video);
    };

    const deletarVideo = async (id) => {
        try {
            await apiDeletarVideo(id);
            setVideos(prevVideos => prevVideos.filter(video => video.id !== id));
        } catch (error) {
            console.error("Erro ao deletar vídeo:", error);
        }
    };

    const atualizarVideo = (videoAtualizado) => {
        setVideos(prevVideos =>
            prevVideos.map(video =>
                video.id === videoAtualizado.id ? videoAtualizado : video
            )
        );
    };

    return (
        <Container>
            <Banner
                video={videoSelecionado}
                categoria={categoriasData.find(cat => cat.nome === videoSelecionado?.categoria)}
            />
            {categoriasData.map((categoria) => (
                <div key={categoria.id}>
                    <CategoriaStyle corDeFundo={categoria.cor}>
                        <h1>{categoria.nome}</h1>
                    </CategoriaStyle>
                    <AreaCard>
                        {videos
                            .filter((video) => video.categoria === categoria.nome)
                            .map((video) => (
                                <Cards
                                    key={video.id}
                                    post={video}
                                    categoria={categoria}
                                    onClick={() => handleCardClick(video)}
                                    onDelete={() => deletarVideo(video.id)} // Passa a função deletarVideo para Cards
                                    atualizarVideo={atualizarVideo} // Passa a função atualizarVideo para Cards
                                />
                            ))}
                    </AreaCard>
                </div>
            ))}
        </Container>
    );
}