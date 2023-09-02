import '../../index.css'
import './nav.css'

import Logo from '../../assets/pitcher.png'


const Nav = () => {
    return (
        <div className="nav_container flex">
            <div className="logo_container flex ">
                <h1 className="logotxt">H</h1>
                <img className="logo" src={Logo} alt="dd" />
            </div>
            <div className="navopt_container flex">
                <div className="navopt flex">B</div>
                <div className="navopt flex">C</div>
                <div className="navopt flex">U</div>
            </div>
        </div>
    )
}

export default Nav