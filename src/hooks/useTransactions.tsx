import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
    id: string,
    title: string,
    type: string,
    category: string,
    amount: number,
    createdAt: string,
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionProviderProps {
    children: ReactNode
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export const TransactionProvider = ({ children }: TransactionProviderProps) => {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions').then(response => setTransactions(response.data.transactions))
    }, [])

    const createTransaction = async (transactionInput: TransactionInput) => {


        const response = await api.post('/transactions', { ...transactionInput, createdAt: new Date() })
        const { transaction } = response.data
        setTransactions([...transactions, transaction])
    }
    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export const UseTransactions = () => {
    const context = useContext(TransactionsContext);
    return context;
}