import logo from '../../assets/img/logo/logoCT.png'
function Home() {
  return (
    <div className="flex justify-center items-center bg-blue-400 py-4 text-white min-h-screen">
      <div className="text-center items-center flex flex-col text-lg ">
        <h1 className="font-bold text-3xl mb-4">Seja bem-vindo(a)!</h1>
        <h2 className='text-lg mb-9'>Soluções para sua saúde, com tecnologia e carinho.</h2>

        <img src={logo} alt="Logo CT Farmácias" className='h-28 my-7'/>


          

          <div className='container flex justify-center py-4 ml-4'>
            <button className="border-4 rounded-3xl bg-indigo-400 flex justify-center
                                   hover:bg-red-800 text-white w-1/2 py-2">Categorias</button>
          </div>

        
          
      </div>
      
    </div>
  )
}

export default Home