import styled from 'styled-components';
import Card from './Card'; 

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
    border: 4px solid #167ac6;
    border-radius:5px;
`;

export default function Banner() {
    const urldefundoimagem = 'https://i.ytimg.com/vi/c8mVlakBESE/hq720.jpg';

    return (
        <DivBanner>
            <BannerStyle urldefundoimagem={urldefundoimagem}>
                <Card
                    categoria='FRONT END'
                    titulo='SEO com React'
                    descricao='Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!'
                    video="https://www.youtube.com/embed/9SL338CTdYA"
                />
            </BannerStyle>
        </DivBanner>
    );
}