function Textarea({ obrigatorio, label, placeholder, valor, aoAlterado, minLength, maxLength }) {
    const placeholderModificada = `${placeholder}...`;

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value);
    };

    return (
        <div>
            <label>{label}</label>
            <textarea
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholderModificada}
                minLength={minLength}
                maxLength={maxLength}
            />
        </div>
    );
}

export default Textarea;
