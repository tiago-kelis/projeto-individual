import Conteudo from "../content/Conteudo";
import MenuLateral from "../dashboard/MenuLateral";



export default function Area() {
    return (
        <div className="flex flex-col h-screen">
            <Menu>

            </Menu>
                <div className="flex">
                    <MenuLateral>
                
                     </MenuLateral>
                    <Conteudo className="">
                        <div className="text-3xl ml-36 mt-24 ">
                            Acompanhe o Andamento deste Projeto...
                        </div>
                    </Conteudo>
                </div>
                
           
        </div>
    )
}