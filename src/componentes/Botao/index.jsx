import styled from "styled-components";

const Botao = styled.button`
        background-color:${({ ehAtivo }) => ehAtivo ? '#00000083' : 'transparent'} ;
        color:${({ ehAtivo }) => ehAtivo ? '#2271d1' : '#f5f5f5'};
        border-radius: 10px;
        font-size: 20px;
        font-family: Source Sans Pro;
        font-weight: bold;
        width: 180.13px;
        height: 54px;
        border: 2px solid ${({ ehAtivo }) => ehAtivo ? '#2271d1' : '#fff'};;
        box-shadow:${({ehAtivo}) => ehAtivo ? 'inset 0px 0px 12px 4px #2271D1' : 'none'};
        transition: background-color 0.3s ease;
        cursor: pointer;
        
`
export default Botao