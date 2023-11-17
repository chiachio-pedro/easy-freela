import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";

export default function App() {
  return (
    <ChakraProvider>      
      <Navbar />
      <Footer />
    </ChakraProvider>
  )
}
