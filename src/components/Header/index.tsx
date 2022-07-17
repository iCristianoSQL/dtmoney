import { useState } from "react"
import logoImg from "../../assets/logo.svg"
import { NewTransactionModal } from "../NewTransactionModal"
import * as S from "./styles"

export const Header = () => {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false)
    }
    return (
        <S.Container>
            <S.Content>
                <img src={logoImg} alt="dtmoney" />
                <button type="button" onClick={handleOpenNewTransactionModal}>Nova transação</button>
            </S.Content>
            <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
        </S.Container>
    )
}
