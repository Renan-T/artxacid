import Logo from './Logo'
import Products from "../components/Products"
import Homevideo from "../components/Homevideo"

export default function Shop() {
    return (
        <div className="flex flex-col items-center pb-40"
         style={{
            backgroundImage: `url(/background_artxacid.png)`
        }}> 
            <Logo/>
            <Products />
            <Homevideo />
        </div>
    )
}