import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/img/logo/logoCT.png'

function Navbar() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="w-full py-4 bg-blue-600 text-white">
          <div className="container mx-auto flex items-center justify-between px-4">
            {/* Esquerda - Logo e Nome */}
            <div className="flex items-center">
              <img src={logo} alt="Logo CT Farmácias" className="h-12" />
              <h1 className="text-lg ml-4 font-bold">CT Farmácias</h1>
            </div>
      
            {!isHome && (
              <div className="flex gap-6">
                <Link to='/cadastrarcategoria' className="hover:underline cursor-pointer">Nova Categoria</Link>
                <Link to='/' className="hover:underline cursor-pointer">Home</Link>
              </div>
            )}
          </div>
        </div>
      );
      
}

export default Navbar