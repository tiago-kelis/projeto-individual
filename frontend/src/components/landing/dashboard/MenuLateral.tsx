import {   IconLogout, IconServer, IconSettings, IconUser, IconVideo } from "@tabler/icons-react"
import MenuItemLateral from "./MenuItemLateral"


/* eslint-disable @typescript-eslint/no-explicit-any */
export interface MenuLateralProps {
    className?: string
    children?: any
}



export default function MenuLateral(props: MenuLateralProps) {
    return (
        <div className={`flex flex-col flex-1 h-screen bg-zinc-900 max-w-52  ${props.className ?? ''}`}>

            <MenuItemLateral icon={<IconVideo/>} label="Videos"/>
            <MenuItemLateral icon={<IconUser/>} label="User"/> 
            <MenuItemLateral icon={<IconServer/>} label="Services"/> 
            <MenuItemLateral icon={<IconSettings/>} label="Settings"/> 
            <MenuItemLateral icon={<IconLogout/>} label="Logout"/>
                   
        </div>
    )
}