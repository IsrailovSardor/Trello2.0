import styled from 'styled-components'
import './App.css'
import { Header } from './components/Header/Header'
import { LeftColumn } from './components/LeftColumn/LeftColumn'
import { RightColumn } from './components/RightColumn/RightColumn'

function App() {

  return (
    <div className="App">
      <Header />
      <WpapperMain>
        <LeftColumn />
        <RightColumn />
        <p>Hello</p>
      </WpapperMain>
    </div>
  )
}

export default App

const WpapperMain = styled.div`
  width: 100%;
  height: calc(100vh - 44px);
  display: flex;
`
