import { FacebookLogoIcon, InstagramLogoIcon } from "@phosphor-icons/react"


function Footer() {
    return (
      <div className="w-full py-4 bg-blue-600 justify-center text-white">
          <div className="container mx-auto flex flex-col items-center justify-center">
                <div className="flex gap-8">
                    <FacebookLogoIcon size={48} weight='bold' />
                    <InstagramLogoIcon size={48} weight='bold' />
                </div>
        
                <div className="font-bold py-4">
                    <h2>Siga-nos nas redes sociais</h2>
                </div>
            </div>
      </div>
    )
  }
  
  export default Footer