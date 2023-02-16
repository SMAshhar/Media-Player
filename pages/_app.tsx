import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "theme";

import '../styles.css'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps}></Component>
        </ChakraProvider>
    )
}

export default App