import Conteudo from "../content/Conteudo";
import MenuLateral from "../dashboard/MenuLateral";
import Footer from "../footer/Footer";
import Menu from "../header/Menu";


export default function Area() {
    return (
        <div className="flex flex-col h-screen">
            <Menu>

            </Menu>
                <div className="flex">
                    <MenuLateral>
                
                     </MenuLateral>
                    <Conteudo>
                       <div className="text-2xl justify-center items-center ml-56 mt-28">
                         Aconpanhe a Evolução deste Projeto...
                       </div>
                    </Conteudo>
                </div>
            <Footer>
                
            </Footer>           
           
        </div>
    )
}