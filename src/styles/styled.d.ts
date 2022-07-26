import 'styled-components'

declare module 'styled-components' {

    export interface DefaultTheme {
        title: string,
        colors: {
            background: string,
            red: string,
            blue: string,
            blueLight: string,
            textTitle: string,
            shape: string,
            textBody: string,
            green: string,
        }
    }
}