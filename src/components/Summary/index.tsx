import { Container } from "./styles"
import IncomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { UseTransactions } from "../../hooks/useTransactions"




export const Summary = () => {

    const { transactions } = UseTransactions()

    const summary = transactions.reduce((acc, transaction) => {

        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount;
        }
        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return (

        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="Icon Img" />
                </header>
                <strong>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: "BRL" }).format(summary.deposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Icon Img" />
                </header>
                <strong> - {new Intl.NumberFormat('pt-br', { style: 'currency', currency: "BRL" }).format(summary.withdraws)}</strong>
            </div>
            <div className="highlight">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="TotalIcon" />
                </header>
                <strong>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: "BRL" }).format(summary.total)}</strong>
            </div>
        </Container>
    )
}