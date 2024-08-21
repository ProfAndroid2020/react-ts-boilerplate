import { ChakraProvider } from '@chakra-ui/react'
import { Cart } from './cart'

export const App: React.FC = () => (
  <ChakraProvider>
    <h1>Hello with chakra</h1>
    <Cart />
  </ChakraProvider>
)
