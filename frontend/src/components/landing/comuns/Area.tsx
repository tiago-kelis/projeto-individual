import Conteudo from "../content/Conteudo";
import MenuLateral from "../dashboard/MenuLateral";



export default function Area() {
    return (
        <div className="flex flex-col h-screen">
              <div className="flex">
                    <MenuLateral/>                                                
                     
                    <Conteudo className="flex justify-center items-center text-2xl text-green-700 ">
                        
                         Acompanhe o Andamento deste Projeto...
                        

                    </Conteudo>
                </div>
                
           
        </div>
    )
}