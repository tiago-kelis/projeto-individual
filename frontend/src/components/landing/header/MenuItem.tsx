export interface MenuItemProps {
    className?: string
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <div className={` flex ${props.className}`}>
            <ul className="flex space-x-4">
                <li className="font-light bg-gradient-to-r from-amber-900 via-black p-2 rounded-ee-4xl pl-2 pr-11">
                    <a href="#">Home</a>
                </li>
                <li  className="font-light bg-gradient-to-r from-amber-900 via-black p-2 rounded-ee-4xl pl-2 pr-11">
                    <a href="#">Sobre</a>
                </li>
                 <li  className="font-light bg-gradient-to-r from-amber-900 via-black p-2 rounded-ee-4xl pl-2 pr-11">
                    <a href="#">Login</a>
                </li>
                 <li  className="font-light bg-gradient-to-r from-amber-900 via-black p-2 rounded-ee-4xl pl-2 pr-11">
                    <a href="#">SignIn</a>
                </li>
            </ul>
            
        </div>
    )
}