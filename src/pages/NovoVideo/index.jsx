import styled from "styled-components"
import CampoTexto from "../../componentes/CampoTexto"
import ListaSuspensa from "../../componentes/ListaSuspensa"

const NovoStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap:47px;
    margin: 0 auto;
    max-width: 1360px;
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
export default function NovoVideo(props) {
    

    // const categoria = [
    //     {
    //         nome:'FRONT END',
    //         cor:'#6BD1FF'
    //     },
    //     {
    //         nome:'BACK END',
    //         cor:'#00C86F'
    //     },
    //     {
    //         nome:'MOBILE',
    //         cor:'#FFBA05'
    //     },
    // ]
    // const [cards, setCards] = useState([])

    // const aoNovoCardAdicionado = (card) => {
    //     setCards([...cards, card])
    // }
    

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

                <CampoTexto 
                    obrigatorio={true}
                    label="Titulo"
                    placeholder="  Titulo do Video"
                />
                {/* <ListaSuspensa
                    obrigatorio={true}
                    label="Categoria"
                    itens={props.categorias}
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)}
                /> */}
                
            </form>
        </NovoStyle>
    )
}