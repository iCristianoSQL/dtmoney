import logoImg from "../../assets/logo.svg"
import * as S from "./styles"


export const Header = () => {
    return (
        <S.Container>
            <S.Content>
                <img src={logoImg} alt="dtmoney" />
                <button type="button">Nova transação</button>
            </S.Content>
        </S.Container>
    )
}
