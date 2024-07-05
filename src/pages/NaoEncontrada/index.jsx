import styled from "styled-components"


const NaoEncontradaStyle = styled.section`
    margin: 0 auto;
    background-color: blue;
    max-width: 1440px;
    text-align: center;
`

export default function NaoEncontrada(){
    return (
        <NaoEncontradaStyle>
            <h2>Opaa!!</h2>
            <p>O conteudo que voce procura nao existe!!</p>
        </NaoEncontradaStyle>
    )
}