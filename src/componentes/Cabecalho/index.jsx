import styled from "styled-components"
import logo from '../../assets/image/logo.png'
import { Link, useLocation } from "react-router-dom"
import Botao from "../Botao"


const CabecalhoStyle = styled.header`
    background-color: ${(props) => (props.ehNovoVideo ? '#000' : '#262626')};
    border-bottom:4px solid #2271D1;
    box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.7);
    max-width: 1440px;
    height:125px ;
    align-content: center;
    margin: 0 auto;
    z-index: 1;
    position: relative;
    
    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 50px;
    }
    img{
        width: 168.45px;
        height: 40px;
    }
    div{
        display: flex;
        gap:25px;
        
    }
`


export default function Cabecalho() {
    const location = useLocation()
    const ehNovoVideo = location.pathname === '/novo-video'

    return (
        <CabecalhoStyle ehNovoVideo={ehNovoVideo}>
            <section>
                <nav>
                    <img src={logo} alt="AluraFlix.png" />
                    <div>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Botao ehAtivo={location.pathname === '/'}>HOME</Botao>
                        </Link>
                        <Link to="/novo-video" style={{ textDecoration: 'none' }}>
                            <Botao ehAtivo={location.pathname === '/novo-video'}>NOVO VIDEO</Botao>
                        </Link>
                    </div>
                </nav>
            </section>
        </CabecalhoStyle>
    )
}