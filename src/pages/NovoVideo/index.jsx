import styled from "styled-components"

const NovoStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap:47px;
    margin: 0 auto;
    max-width: 1360px;
    height: 1192px;
    color: #fff;
    font-family: Roboto;
    text-align: center;
    section{
    }
    p{
        font-size: 20px;
        font-weight: 300;
        text-transform: uppercase;
    }
    div{
        display: flex;
        width: 1172px;
        margin: 0 auto;
        border: 2px solid #6b6b6b50;
        border-left:none;
        border-right:none;
    }
`
const Titulo = styled.h1`
    margin: 0;
    padding-top: 60px;
    font-size: 60px;
    font-weight: bold;
`
export default function NovoVideo() {
    return (
        <NovoStyle>
            <section>
                <Titulo>NOVO VÍDEO</Titulo>
                <p>Complete o formulário para criar um novo card de vídeo.</p>
            </section>
            <div>
                <h2>Criar Card</h2>
            </div>

            <form action="">
                <label>Titulo</label>
                <input type="text" placeholder="Titulo" />
                <label>Categoria</label>
                <input type="text" placeholder="Categoria" />
            </form>
        </NovoStyle>
    )
}