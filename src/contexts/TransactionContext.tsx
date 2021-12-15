import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface TransactionProviderProps {
  children: ReactNode
}

interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>

interface TransactionContextProps {
  transactions: TransactionProps[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionContext = createContext<TransactionContextProps>({} as TransactionContextProps);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    api.get('transactions').then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', transactionInput);
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}