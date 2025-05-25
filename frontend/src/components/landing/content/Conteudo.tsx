/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ConteudoProps {
    children?: any
    className?: string
}

export default function Conteudo(props: ConteudoProps) {
    return (
       <div className={`pt-24 flex-1 relative max-w-4xl bg-zinc-600 max-h-2xl m-10 ml-48 ${props.className ?? ''}`}>
         {props.children}
      </div>
    )
}