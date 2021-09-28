import { Card } from "../components/Card"
import { CheckBox } from "../components/CheckBox"
import { Header } from "../components/Header"
import { GridCard } from './styles'

export const Home = () => {
  return (
    <>
      <Header/>
      <GridCard>
        <CheckBox/>
        <Card/>
      </GridCard>
    </>
  )
}