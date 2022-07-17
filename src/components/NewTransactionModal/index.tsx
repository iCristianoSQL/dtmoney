import { FormEvent, useState } from "react";

import Modal from "react-modal"
import * as S from "./styles"

import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/vectorEntrada.svg";
import outcomeImg from "../../assets/vectorSaida.svg";
import { api } from "../../services/api";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    function hadleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data = {
            title,
            value,
            category,
            type
        }

        api.post('/transaction', data)
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button
                type="button"
                onClick={onRequestClose}
                className='react-modal-close'>
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <S.Container onSubmit={hadleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input placeholder="Nome" value={title} onChange={e => setTitle(e.target.value)} />
                <input type="number" placeholder="Preço" value={value} onChange={e => setValue(Number(e.target.value))} />

                <S.TransactionTypeContainer>
                    <S.RadioBox type='button' onClick={() => setType('deposit')} isActive={type === 'deposit'} activecolor='green' >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </S.RadioBox>
                    <S.RadioBox type='button' onClick={() => setType('withdraw')} isActive={type === 'withdraw'} activecolor='red' >
                        <img src={outcomeImg} alt="Saida" />
                        <span>Saida</span>
                    </S.RadioBox>
                </S.TransactionTypeContainer>

                <input placeholder="Categoria" value={category} onChange={e => setCategory(e.target.value)} />
                <button type="submit">Cadastrar</button>
            </S.Container>
        </Modal >
    )
}