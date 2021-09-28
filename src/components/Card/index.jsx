import { useContext, useEffect } from 'react'

import { DataContext } from '../../context/DataContext'
import { Container, Content } from './styles'

export const Card = () => {
  const data = useContext(DataContext)
  console.log(data.productImage)
  return (
    <>
    {data.map((item) => (
      <Container key={item.Artikelnummer}>
          <img src={item.productImage} alt="" />
          <p className="name">{item.name}</p>
          <p className="price">{item.salePrice}</p>
      </Container>
    ))}
    </>
  )
}