import { useEffect, useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";
import Modal from 'react-modal'
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./hooks/useTransactions";
import { StylesDataProvider, UseStyles } from "./hooks/useStyles";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

Modal.setAppElement("#root")

function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  const handleOpenNewTransactionModal = () => setIsNewTransactionModalOpen(true)


  const handleCloseNewTransactionModal = () => setIsNewTransactionModalOpen(false)

  // const { theme, setTheme } = UseStyles()
  const [theme, setTheme] = useState(light)
  const checkTheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)')) setTheme(dark)
    if (!window.matchMedia('(prefers-color-scheme: false)')) setTheme(dark)

  }
  const toggleTheme = () => {
    console.log()
    setTheme(theme.title === 'light' ? dark : light)
  }

  useEffect(() => {
    checkTheme()
  }, [])
  return (
    <StylesDataProvider>
      <ThemeProvider theme={theme}>

        <TransactionProvider>
          <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} toogleTheme={toggleTheme} />
          <Dashboard />
          <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequesteClose={handleCloseNewTransactionModal} />
          <GlobalStyles />
        </TransactionProvider>
      </ThemeProvider>
    </StylesDataProvider>
  );
}

export default App;
