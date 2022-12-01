import React from 'react'
import styled from 'styled-components'
import { Header } from './Header/Header'
import { Table } from './Table/Table'

type Props = {}

export const RightColumn = (props: Props) => {
  return (
    <WrapperRightColumn>
      <Header />
      <Table />
    </WrapperRightColumn>
  )
}


const WrapperRightColumn = styled.div`
  height: 100%;
  min-width: calc( 100% - 260px);
  background-color: rebeccapurple;
  /* background: url('src/assets/img/wallper.jpg'); */
  background-size: cover;
`