/* eslint-disable @typescript-eslint/no-explicit-any */
export interface MenuItemProps {
    className?: string
    icon?: any
    label?: string
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <div className={` flex ${props.className}`}>
            <ul className="flex space-x-4">
                <li className="font-light bg-gradient-to-r from-amber-900 via-black p-2 rounded-ee-4xl pl-2 pr-11">
                    <a href="#">Home</a>
                </li>
                <li  className="font-light bg-gradient-to-r from-amber-900 via-black p-2 rounded-ee-4xl pl-2 pr-11">
                    <a href="#">Services</a>
                </li>
                 <li  className="font-light bg-gradient-to-r from-amber-900 via-black p-2 rounded-ee-4xl pl-2 pr-11">
                    <a href="#">About</a>
                </li>
                 <li  className="font-light bg-gradient-to-r from-amber-900 via-black p-2 rounded-ee-4xl pl-2 pr-11">
                    <a href="#">SignIn</a>
                </li>
            </ul>
            {props.icon}
            {props.label}
            
        </div>
    )
}