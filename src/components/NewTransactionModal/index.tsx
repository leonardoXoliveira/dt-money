import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { useTransaction } from '../../hooks/useTransaction';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypesContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface NewTransactionFormValuesProps {
  title: string;
  amount: number;
  type: string;
  category: string;
}

const initialFormValues = {
  title: '',
  amount: 0,
  type: '',
  category: ''
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [formValues, setFormValues] = useState<NewTransactionFormValuesProps>(initialFormValues);

  const { createTransaction } = useTransaction();

  function handleChangeInput(event: FormEvent) {
    const { name, value } = event.target as HTMLInputElement;

    const newValues = {
      ...formValues, [name]: value
    }

    setFormValues(newValues);
  }

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const formattedFormValues = { ...formValues, amount: Number(formValues.amount) }

    createTransaction(formattedFormValues);

    setFormValues(initialFormValues);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <Container>
        <button type="button" className="react-modal-btn-close" onClick={onRequestClose}>
          <img src={closeImg} alt="Fechar modal" />
        </button>

        <h2>Cadastrar transação</h2>

        <input type="text" name="title" id="title" placeholder="Nome" value={formValues.title} onChange={handleChangeInput} />

        <input type="number" name="amount" id="amount" placeholder="Preço" value={formValues.amount} onChange={handleChangeInput} />

        <TransactionTypesContainer>
          <RadioBox htmlFor="deposit" isActive={formValues.type === "deposit"} activeColor="green">
            <input type="radio" name="type" id="deposit" value="deposit" checked={formValues.type === "deposit"} onChange={handleChangeInput} />
            <img src={incomeImg} alt="Entrada" />
            Entrada
          </RadioBox>

          <RadioBox htmlFor="withdraw" isActive={formValues.type === "withdraw"} activeColor="red">
            <input type="radio" name="type" id="withdraw" value="withdraw" checked={formValues.type === "withdraw"} onChange={handleChangeInput} />
            <img src={outcomeImg} alt="Saída" />
            Saída
          </RadioBox>
        </TransactionTypesContainer>

        <input type="text" name="category" id="category" placeholder="Categoria" value={formValues.category} onChange={handleChangeInput} />

        <button type="submit" onClick={handleCreateNewTransaction}>
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}