import styled from 'styled-components'
import logo from '../../assets/image/logo.png'

const RodapeStyle = styled.footer`
    background-color: #000;
    max-width: 1440px;
    height:125px ;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: solid 4px #2271d1;
    box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.7);

    img{
        width: 168.45px;
        height: 40px;
    }
`

export default function Rodape(){
    return(
        <RodapeStyle>
            <img src={logo} alt="logoAluraFlix.png" />
        </RodapeStyle>
    )
}