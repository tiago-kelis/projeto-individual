/* eslint-disable @typescript-eslint/no-explicit-any */
export interface MenuItemProps {
    className?: string
    icon?: any
    label?: string
}

export default function MenuItemLateral(props: MenuItemProps) {
    return (
        <div className={` flex z-50 mt-36 -mb-32  bg-zinc-800 m-3 p-1 text-orange-700 justify-center gap-2 rounded-3xl hover:bg-gray-800 cursor-pointer ${props.className}`}>           
            {props.icon}
            {props.label}            
        </div>
    )
}