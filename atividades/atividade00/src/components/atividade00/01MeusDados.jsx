import { Component } from "react"
import "./estilos.css"

// Forma Clássica
export function MeusDados01c() {
    return (
        <div className="fundo-amarelo">
            <h2>Francisco Vitor Gomes Castro</h2>
            <h2>Sistemas de Informação</h2>
            <h2>Universidade Federal do Ceará</h2>
            <h4>Versão clássica</h4>
        </div>
    )
}

// Arrow Function
export const MeusDados01a = () => {
    return (
        <div>
            <h2>Francisco Vitor Gomes Castro</h2>
            <h2>Sistemas de Informação</h2>
            <h2>Universidade Federal do Ceará</h2>
            <h4>Versão arrow com return</h4>
        </div>
    )
}

export class MeusDados01cl extends Component{
    render(){
        return (
            <div>
            <h2>Francisco Vitor Gomes Castro</h2>
            <h2>Sistemas de Informação</h2>
            <h2>Universidade Federal do Ceará</h2>
            <h4>Versão com classe</h4>
        </div>
        )
    }
}


const MeusDados01 = () => 
    <div>
        <h2>Francisco Vitor Gomes Castro</h2>
        <h2>Sistemas de Informação</h2>
        <h2>Universidade Federal do Ceará</h2>
        <h4>Versão arrow sem return</h4>
    </div>
    

export default MeusDados01

