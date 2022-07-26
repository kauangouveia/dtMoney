import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { UseTransactions } from '../../hooks/useTransactions'

import { Container, RadioBox, TransactionTypeContainer } from './styles'


interface NewTransactionModalProps {
    isOpen: boolean
    onRequesteClose: () => void
}

export const NewTransactionModal = ({ isOpen, onRequesteClose }: NewTransactionModalProps) => {
    const { createTransaction } = UseTransactions()
    
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit')

    const handleCreateNewTransaction = async (event: FormEvent) => {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type,
        });

        onRequesteClose();
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequesteClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button type='button' onClick={onRequesteClose} className='react-modal-close'>
                <img src={closeImg} alt="X para fechar modal " />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>

                <h2>Cadastrar transação</h2>

                <input
                    type="text"
                    placeholder='Título'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    type="number"
                    placeholder='Valor'
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type='button'
                        onClick={() => { setType('withdraw') }}
                        isActive={type === 'withdraw'}
                        activeColor='red'
                    >
                        <img src={outcomeImg} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    type="text"
                    placeholder='Categoria'
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button
                    type='submit'
                >
                    Cadastrar
                </button>
            </Container>


        </Modal>
    )
}