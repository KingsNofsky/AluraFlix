import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Card from '../Card'; 
import { api } from '../../lib/axios'; // Supondo que você tenha configurado o arquivo de API corretamente

const DivBanner = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    height: 800px;
    background-color: #00123376;
    position: relative;
`;

const BannerStyle = styled.div`
    background-image: radial-gradient(circle, rgb(0 0 0 / 70%), rgb(0 0 0 / 80%)), url(${props => props.urldefundoimagem});
    height: 744px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin-top: -125px;
    border: 4px solid ${props => props.corBorda};
    border-radius: 5px;
`;

export default function Banner() {
    const [primeiroVideo, setPrimeiroVideo] = useState(null);
    const [categoriaCor, setCategoriaCor] = useState(null);
    const [dadosCarregados, setDadosCarregados] = useState(false);

    useEffect(() => {
        // Verifica se os dados já foram carregados do localStorage
        const cachedVideo = localStorage.getItem('primeiroVideo');
        const cachedCategoria = localStorage.getItem('categoriaCor');

        if (cachedVideo && cachedCategoria) {
            setPrimeiroVideo(JSON.parse(cachedVideo));
            setCategoriaCor(JSON.parse(cachedCategoria));
            setDadosCarregados(true);
        } else {
            // Se não estiverem no cache, faz a requisição à API
            api.get('/videos/1') // Supondo que /videos/1 seja o endpoint para obter o primeiro vídeo
                .then((resVideo) => {
                    setPrimeiroVideo(resVideo.data);
                    localStorage.setItem('primeiroVideo', JSON.stringify(resVideo.data)); // Salva no localStorage
                    return api.get('/categorias/1'); // Supondo que /categorias/1 seja o endpoint para obter a categoria
                })
                .then((resCategoria) => {
                    setCategoriaCor(resCategoria.data);
                    localStorage.setItem('categoriaCor', JSON.stringify(resCategoria.data)); // Salva no localStorage
                    setDadosCarregados(true); // Marca que os dados foram carregados com sucesso
                })
                .catch((err) => {
                    console.log(err);
                    // Tratar erros conforme necessário
                });
        }
    }, []); // Executa o useEffect somente na montagem inicial

    // Verifica se os dados ainda estão sendo carregados ou se ocorreu algum erro
    if (!dadosCarregados || !primeiroVideo || !categoriaCor) {
        return null; // Ou algum indicador de carregamento, como um spinner
    }

    return (
        <DivBanner>
            <BannerStyle urldefundoimagem={primeiroVideo.thumbnail} corBorda={categoriaCor.cor}>
                <Card 
                    categoria={primeiroVideo.categoria}
                    titulo={primeiroVideo.titulo}
                    descricao={primeiroVideo.descricao}
                    video={primeiroVideo.video}
                />
            </BannerStyle>
        </DivBanner>
    );
}
