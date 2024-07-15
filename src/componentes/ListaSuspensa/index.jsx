

function ListaSuspensa({ obrigatorio, label, placeholder, itens, valor, aoAlterado }) {
    const placeholderModificada = `${placeholder}...`;

    const aoSelecionado = (evento) => {
        aoAlterado(evento.target.value);
    };

    return (
        <div>
            <label>{label}</label>
            <select value={valor} onChange={aoSelecionado} required={obrigatorio}>
                <option value="" disabled>{placeholderModificada}</option>
                {itens.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
        </div>
    );
}

export default ListaSuspensa;
