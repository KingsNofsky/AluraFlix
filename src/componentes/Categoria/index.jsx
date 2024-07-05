import styled from "styled-components"
import Cards from "../Cards"

const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`
const CategoriaStyle = styled.div`
    font-family: Roboto;
    color: aliceblue;
    h1{
        background-color: #6BD1FF;
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
    return (
        <Container>
            
            <CategoriaStyle>
                <h1>FRONT END</h1>
            </CategoriaStyle>
            <AreaCard>
                <Cards />
                <Cards />
            </AreaCard>

        </Container>

        
    )
}