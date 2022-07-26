import { createContext, ReactNode, useContext, useEffect, useState } from "react";


interface StylesData {
    theme: string;
    setTheme: Function
}

interface SyelesProviderProps {
    children: ReactNode
}


const StylesContext = createContext<StylesData>('Light' as any);


export const StylesDataProvider = ({ children }: SyelesProviderProps) => {

    const [theme, setTheme] = useState('LIGHT')

    return (
        <StylesContext.Provider value={{ theme, setTheme }}>
            {children}
        </StylesContext.Provider>
    )
}

export const UseStyles = () => {
    const context = useContext(StylesContext);
    return context;
}