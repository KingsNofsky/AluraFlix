import styled from "styled-components"

const CardStyle = styled.div`
    display: flex;
    margin: 0 50px;
    height: 333.58px;
    position:relative ;
    font-family: roboto;
    color: #fff;
    top:310px;
    gap: 50px;
    section{
        max-width: 665.84px;
    }
    h1{
        background-color: #6BD1FF;
        max-width: 296.82px;
        height: 92px;
        display: flex;
        border-radius: 15px;
        font-size: 48px;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 40px;
    }
    h2{
        font-size: 46px;
        font-weight: 300;
        margin-bottom: 0;
    }
    p{
        font-size: 18px;
        font-weight: 200;
    }
    div{
        min-width:646px;
        border:4px solid #6BD1FF;
        box-shadow: 0px 5px 29px 0px rgb(34, 113, 209);
        border-radius:5px;
    }
    iframe{
        border-radius: 4px;
    }
`


export default function Card(props) {
    const { categoria, titulo, descricao, video } = props

    return (
        <CardStyle>
            <section>
                <h1>{categoria}</h1>
                <h2>{titulo}</h2>
                <p>{descricao}</p>
            </section>
            <div>
                <iframe
                    src={video}
                    frameBorder="0"
                    width='100%'
                    height="100%"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                >
                </iframe>
            </div>
        </CardStyle>
    )
}