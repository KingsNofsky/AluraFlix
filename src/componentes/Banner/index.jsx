import styled from 'styled-components';
import Card from '../Card'; 
import videosData from '../../json/db.json'
import categoriasData from "../../json/categoria.json"


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
    border-radius:5px;
`;

export default function Banner() {
    const primeiroVideo = videosData.videos[3]
    const categoriaCor = categoriasData[2]

    return (
        <DivBanner >
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