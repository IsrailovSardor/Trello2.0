import React from 'react'
import styled from 'styled-components'
import { Header } from './Header/Header'

type Props = {}

export const RightColumn = (props: Props) => {
  return (
    <WrapperRightColumn>
        <Header/>        

    </WrapperRightColumn>
  )
}


const WrapperRightColumn = styled.div`
  flex: 5;  
  height: 100%;
  background-color: rebeccapurple;
  /* background: url('src/assets/img/wallper.jpg'); */
  background-size: cover;
`