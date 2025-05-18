import Image from "next/image";

export default function Logo() {
    return (
        <div className="">
            <Image src="/LogoRobo.png" alt="Logo" width={100} height={100}/>
        </div>
    )
}