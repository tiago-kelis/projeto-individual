import Conteudo from "../content/Conteudo";
import MenuLateral from "../dashboard/MenuLateral";
import Menu from "../header/Menu";



export default function Area() {
    return (
        <div className="flex flex-col h-screen">
            <Menu />            
                <div className="flex">
                    <MenuLateral>
                
                     </MenuLateral>
                    <Conteudo className="">
                        <div className="text-3xl ml-36 mt-24 ">
                            Acompanhe o Andamento do Projeto...
                        </div>
                    </Conteudo>
                </div>
                
           
        </div>
    )
}