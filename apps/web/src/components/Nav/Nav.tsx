import '../../index.css'
import './nav.css'

import Logo from '../../assets/pitcher.png'
import Cart from '../../assets/cart.png'
import User from '../../assets/user.png'
import UserAdd from '../../assets/useradd.png'
import Carousel from '../../assets/carousel.png'
import { Link } from 'react-router-dom';
import { useRecoilState } from "recoil"
import { loggedUser } from "store"

const Nav = () => {

    const [loggedUserEmail, setLoggedUserEmail] = useRecoilState(loggedUser)
    console.log(loggedUserEmail)
    let auth = "/auth"

    if (loggedUserEmail.email == '') {
        auth = '/auth'
    } else if (loggedUserEmail.log_type == "VENDOR") {
        auth = "/vendor"
    } else {
        auth = "/user_logout"
    }



    return (
        <div className="flexC sticky z_20">
            <div className="nav_container flex">
                <Link to="/">
                    <div className="logo_container flex ">
                        <h1 className="logotxt">H</h1>  {/*handy pots.co */}
                        <img className="logo" src={Logo} alt="dd" />
                        <h1 className="logotxt">.</h1>
                    </div>
                </Link>


                <div className="navopt_container flex">

                    <Link to="/catalog">
                        <div className="navopt flex">
                            <div className="pretext">Catalog</div>
                            <img className="navopt_img" src={Carousel} alt="dd" />
                        </div>
                    </Link>
                    {
                        loggedUserEmail.email.length > 0 ? (
                            <Link to="/cart">
                                <div className="navopt flex">
                                    <div className="pretext">Cart</div>
                                    <img className="navopt_img" src={Cart} alt="dd" />
                                </div>
                            </Link>) : (<div></div>)
                    }

                    <Link to={auth}>
                        <div className="navopt flex">

                            <div className="pretext">profile</div>
                            {
                                loggedUserEmail.email.length > 0 ? (<img className='navopt_img' src={User} />) : (<img className='navopt_img' src={UserAdd} />)
                            }

                        </div>
                    </Link>


                </div>
            </div>
            <div className="dividerthin"> </div>


        </div>

    )
}

export default Nav