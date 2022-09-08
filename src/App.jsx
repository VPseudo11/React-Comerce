import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Home from './components/routes/Home'
import Header from './components/shared/Header'
import Login from './components/routes/Login'
import Purchase from './components/routes/Purchase'
import ProductDetail from './components/routes/ProductDetail'
import ProtectedRoutes from './components/routes/ProtectedRoutes'
import Cart from './components/routes/Cart'



function App() {

  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductDetail />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/purchase' element={<Purchase />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`
export default App
