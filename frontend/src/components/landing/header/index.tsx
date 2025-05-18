import Logo from "../comuns/Logo";
import Marca from "../comuns/Marca";
import MenuItem from "./MenuItem";

export default function LogoItem() {
    return (
        <div className="flex flex-row items-center justify-around w-full">
           <div className="flex flex-row items-center justify-items-start">
            <Logo/>
            <Marca/>
           </div>
            <MenuItem className="ml-36"/>
            
        </div>
    )
}