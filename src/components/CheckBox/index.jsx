import { useContext } from 'react'

import { DataContext } from '../../context/DataContext'
import { Container, Content } from "./styles"

export const CheckBox = () => {
  const data = useContext(DataContext)
  return (
    <Container>
      <h2>Je selectie</h2>
      {data.map((item) => (
        <Content key={item.Artikelnummer}>
          <input type="checkbox" name="" id="" />
          <p>{item.name}</p>
        </Content>
      ))}
    </Container>
  )
}