import logoimg from '../../assets/logo.svg'
import { UseStyles } from '../../hooks/useStyles'
import CustomizedSwitches from '../Switch'
import { Container, Content } from './styles'
import { ThemeContext } from 'styled-components'
import { useContext } from 'react'
interface HeaderProps {
    onOpenNewTransactionModal: () => void
    toogleTheme: () => void
}
export const Header = ({ onOpenNewTransactionModal, toogleTheme }: HeaderProps) => {
    const { colors, title } = useContext(ThemeContext)
    const { theme, setTheme } = UseStyles()

    return (
        <Container>
            <Content>
                <img src={logoimg} alt='Logo dtmoney' />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
                <CustomizedSwitches theme={theme} setTheme={setTheme} changeTheme={toogleTheme} />
            </Content>
        </Container>
    )
}