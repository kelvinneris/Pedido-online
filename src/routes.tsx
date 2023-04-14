import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgersPage from './pages/Main/Burgers'
import DrinksPage from './pages/Main/Drinks'
import IceCreamsPage from './pages/Main/IceCream'
import PizzasPage from './pages/Main/Pizzas'
import MyCartPage from './pages/MyCart'



export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<BurgersPage />} />
        <Route path='pizzas' element={<PizzasPage />} />
        <Route path='drinks' element={<DrinksPage />} />
        <Route path='ice-creams' element={<IceCreamsPage />} />
      </Route>
      <Route path='cart' element={<MyCartPage />} />
    </Routes>
  )
}
