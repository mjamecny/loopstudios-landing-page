import styled from "styled-components"

import Footer from "./Footer"
import Creations from "./Creations"
import Header from "./Header"
import Info from "./Info"

const StyledApp = styled.div``

export default function App() {
  return (
    <StyledApp>
      <Header />
      <Info />
      <Creations />
      <Footer />
    </StyledApp>
  )
}
