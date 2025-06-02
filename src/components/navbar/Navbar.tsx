import logo from '../../assets/img/logo/logoCT.png'

function Navbar() {
  return (
    <div className="w-full flex py-4 bg-blue-600 text-white items-center">
        <img src={logo} alt="Logo CT Farmácias" className='h-12 ml-4'/>
        <div className="text-lg ml-4 font-bold">
            <h1>CT Farmácias</h1>
        </div>
       
    </div>
  )
}

export default Navbar