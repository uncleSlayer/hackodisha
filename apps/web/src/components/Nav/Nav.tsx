import '../../index.css'
import './nav.css'


const Nav = () => {
    return (
        <div className="nav_container flex">
            <div className="logo_container ">
                <img className="logo" src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg" alt="" />
            </div>
            <div className="navopt_container flex">
                <div className="navopt">home</div>
                <div className="navopt">about us</div>
                <div className="navopt">sign up</div>
            </div>
        </div>
    )
}

export default Nav