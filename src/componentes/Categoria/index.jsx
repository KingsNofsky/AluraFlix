import styled from "styled-components"
import Cards from "../Cards"
import categoriaData from '../../json/categoria.json'
import { useEffect, useState } from "react"
const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`
const CategoriaStyle = styled.div`
    font-family: Roboto;
    color: #fff;
    h1{
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
`
const AreaCard = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
`



export default function Categoria() {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/KingsNofsky/video-api/videos')
            .then(resposta => resposta.json())
            .then(dados => { 
                setVideos(dados)
            })
    },[])

    const categorias = categoriaData[0]

    return (
        <Container>

            <CategoriaStyle corDeFundo={categorias.cor}>
                <h1>{categorias.nome}</h1>
            </CategoriaStyle>
            <AreaCard>
            {videos.map((video) => {
                    return <Cards {...video} key={video.id} />
                })}

            </AreaCard>

        </Container>


    )
}