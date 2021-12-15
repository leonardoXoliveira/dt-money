import { useTransaction } from '../../hooks/useTransaction'

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransaction();

  const { deposits, withdraws, total } = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, { deposits: 0, withdraws: 0, total: 0 })

  return (
    <Container>
      <div>
        <header>
          <span>Entradas</span>
          <img src={incomeImg} alt="Entradas" />
        </header>

        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(deposits)}
        </strong>
      </div>

      <div>
        <header>
          <span>Saídas</span>
          <img src={outcomeImg} alt="Saídas" />
        </header>

        <strong>
          -
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(withdraws)}
        </strong>
      </div>

      <div className={`highlight ${total < 0 && 'debt-highlight'}`}>
        <header>
          <span>Total</span>
          <img src={totalImg} alt="Total" />
        </header>

        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(total)}
        </strong>
      </div>
    </Container>
  );
}