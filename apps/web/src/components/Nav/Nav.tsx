import '../../index.css'
import './nav.css'

import Logo from '../../assets/pitcher.png'
import Cart from '../../assets/cart.png'
import User from '../../assets/user.png'
import Carousel from '../../assets/carousel.png'

const Nav = () => {
    return (
        <div className="flexC sticky z_20">
            <div className="nav_container flex">
                <div className="logo_container flex ">
                    <h1 className="logotxt">H</h1>  {/*handy pots.co */}
                    <img className="logo" src={Logo} alt="dd" />
                    <h1 className="logotxt">.</h1>
                </div>
                
                <div className="navopt_container flex">
                    <div className="navopt flex"><img className="navopt_img" src={Carousel} alt="dd" /></div>
                    <div className="navopt flex"><img className="navopt_img" src={Cart} alt="dd" /></div>
                    <div className="navopt flex"><img className="navopt_img" src={User} alt="dd" /></div>
                </div>
            </div>
            <div className="dividerthin"> </div>
            
            
        </div>
        
    )
}

export default Nav