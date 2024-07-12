import styled from "styled-components";
import Cards from "../Cards";
import categoriasData from '../../json/categoria.json';
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
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

    useEffect(() => {
        api.get('/videos')
            .then((resposta) => {
                setVideos(resposta.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Container>
            {categoriasData.map((categoria) => (
                <div key={categoria.id}>
                    <CategoriaStyle corDeFundo={categoria.cor}>
                        <h1>{categoria.nome}</h1>
                    </CategoriaStyle>
                    <AreaCard>
                        {videos
                            .filter((video) => video.categoria === categoria.nome)
                            .map((video) => (
                                <Cards key={video.id} post={video} categoria={categoria} />
                            ))}
                    </AreaCard>
                </div>
            ))}
        </Container>
    );
}
