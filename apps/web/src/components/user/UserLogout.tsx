import { useState } from "react"
import React  from 'react'
import { MouseEvent } from "react"
import { useNavigate } from "react-router-dom"
import { loggedUser,cartAtom } from "store"
import { useRecoilState } from "recoil"


import '../../index.css'
import './logoutstyle.css'
import LoginLogo from './login.jpg'
import SignupLogo from './signup.jpg'


const UserLogout = () => {

    const navigate = useNavigate()

    const [loggedUserState, setLoggedUser] = useRecoilState(loggedUser)
    const [cart,setCart] = useRecoilState(cartAtom)

    const handleLogoutBtn = (e: MouseEvent) => {
        e.preventDefault()

        fetch(
            'http://localhost:8000/logout',
            {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                credentials: 'include',
                
            }
        )
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                console.log(resp);
                if(resp.error){
                    alert(resp.error)
                 
                    navigate('/')
                }
                else{
                    setLoggedUser({email : "",log_type:""})
                    setCart({id: 0,
        name: '',
        price: 0,
        quantity: 0,
        productId: 0,
        imageURL: ''})
                    navigate('/auth')
                } 
            }).catch((err)=>{
                alert("Error: " + err);
            })

    }


    
  
    const [role, setRole] = useState<String>()

 

    
    const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };
    return (
        <div className={`section ${isActive ? 'active' : ''}`}>
             
        <div className={`container ${isActive ? 'active' : ''}`}>
            <div className="user signinBx">
                <div className="imgBx"><img src={LoginLogo}/></div>
                <div className="formBx">
                    <form className="f">
                        
                        <input type="submit" onClick={handleLogoutBtn} value="Logout"/>
                        <p className="signup">Add a comment or review <span  onClick={toggle} >Click Here</span></p>
                    </form>
                </div>
            </div>
            
           

            <div className="user signupBx">
                <div className="formBx">
                    <form className="f"action="">
                    <p>Add a review or comment</p>
                    <textarea rows={8} cols={30}></textarea>
                    <div>
                    
                           
                    </div>
                    <input type="submit" onClick={()=>{
                        alert("Thank You!!")
                        navigate('/auth')
                    }}   value="Submit"/>
                    <p className="signup"><span onClick={toggle}>Back</span></p>
                    </form>
                </div>
                <div className="imgBx"><img src={SignupLogo}/></div>
            </div>   
        </div>

        </div>
    )

}

export default UserLogout