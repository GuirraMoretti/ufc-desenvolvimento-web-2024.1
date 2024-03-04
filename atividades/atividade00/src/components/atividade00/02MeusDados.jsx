// Arrow Function
const MeusDados02 = (props) => {

    const {nome, curso, faculdade} = props

    return (
        <div>
            <h1>{nome}</h1>
            <h2>{curso}</h2>
            <h3>{faculdade}</h3>
            <h4>Versão com props</h4>
        </div>
    )
}

export default MeusDados02

