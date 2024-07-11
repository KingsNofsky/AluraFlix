import styled from "styled-components"
import { CiTrash, CiEdit } from "react-icons/ci";
import videosData from '../../json/db.json'
import categoriasData from '../../json/categoria.json'

const Imagem = styled.div`
    background: url(${props => props.urlThumbnail});
    border: 4px solid ${props => props.corBorda};
    box-shadow: inset 0px 0px 17px 8px ${props => props.corBorda};
    border-radius: 4px 4px 0px 0px;
    width: 432px;
    height: 260.85px;
    background-size: cover;
`

const StiloSection = styled.section`
    display: flex;
    height: 319.42px;
    flex-direction: column;
    align-items: center;
    padding:0 0 20px 30px;
    ul {
        list-style: none;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        padding: 0;
        flex-direction: row;
        align-items: center;
    }
`

const EditDeleteStyle = styled.div`
    font-family: Roboto;
    width: 430px;
    height: 59px;
    background-color: rgba(0, 0, 0, 0.9);
    border-width: 0px 5px 5px 5px;
    border-style: solid;
    border-color: ${props => props.corBorda};
    box-shadow: inset 0px -4px 5px 3px ${props => props.corBorda};
    border-radius: 0px 0px 15px 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    button {
        background-color: transparent;
        border: none;
        color: #fff;
        font-size: 16px;
        font-weight:800;
        display: flex;
        align-items: center;
        cursor: pointer;
        svg{
            margin-right: 5px;
            font-size: 24px;
        }
    }
`

export default function Cards() {
    const imagemThumb = videosData.videos[0]
    const categoriaCor = categoriasData[0]
    return (
        <StiloSection>
            <Imagem urlThumbnail={imagemThumb.thumbnail} corBorda={categoriaCor.cor}/>
            <EditDeleteStyle corBorda={categoriaCor.cor}>
                <ul>
                    <li><button> <CiTrash /> DELETAR</button></li>
                    <li><button> <CiEdit /> EDITAR </button></li>
                </ul>
            </EditDeleteStyle>
        </StiloSection>
    )
}