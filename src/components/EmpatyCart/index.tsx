import { Button, Container } from "./styles"

import manAndBurgerImg from '../../assets/man-and-burger.svg'

interface EmpatyCartProps {
  title: string
}

export function EmpatyCart({ title }: EmpatyCartProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <Button to='/'>Checar o cardápio</Button>
      <img src={manAndBurgerImg} alt="Homem com hambúrguer" />
    </Container>
  )

}
