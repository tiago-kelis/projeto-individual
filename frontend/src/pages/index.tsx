
import Pagina from "@/components/templates/Pagina";
import { Geist} from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {

 
  return (
    <div className={
      `${geistSans.className} 
      `
    }>
      <Pagina>
        
      </Pagina>     

    </div>
  );
}
