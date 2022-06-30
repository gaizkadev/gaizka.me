import Navbar from "./Navbar"
import Hero from "./Hero"
import SubHero from "./SubHero"
import Services from "./Services"
import Footer from "./Footer"

export default function Layout () {
    return (
       <div className="bg-body">
       <Navbar />
       <SubHero />
       <Services />
       <Footer />
       </div> 
    )
}