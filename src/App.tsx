
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias'
import FormCategorias from './components/categorias/formcategorias/FormCategorias'
import DeletarCategoria from './components/categorias/deletarcategorias/DeletarCategoria'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categorias' element={<ListaCategorias/>} />
            <Route path='/cadastrarcategoria'element={<FormCategorias/>} />
            <Route path='/editarcategoria/:id' element={<FormCategorias/>} />
            <Route path='deletarcategoria/:id'element={<DeletarCategoria/>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
