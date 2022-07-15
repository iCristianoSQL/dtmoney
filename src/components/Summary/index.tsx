import * as S from "./styles"

import EntradaImg from "../../assets/vectorEntrada.svg"
import SaidaImg from "../../assets/vectorSaida.svg"
import TotalImg from "../../assets/total.svg"


export const Summary = () => {
    return (
        <S.Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={EntradaImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={SaidaImg} alt="Entradas" />
                </header>
                <strong>- R$5000,00</strong>
            </div>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={TotalImg} alt="Entradas" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </S.Container>
    )
}
