import { useState } from "react"
import React  from 'react'
import { MouseEvent } from "react"
import { useNavigate } from "react-router-dom"
import { loggedUser } from "store"
import { useRecoilState } from "recoil"


import '../../index.css'
import './logoutstyle.css'
import LoginLogo from './login.jpg'
import SignupLogo from './signup.jpg'


const UserLogout = () => {

    const navigate = useNavigate()

    const [loggedUserState, setLoggedUser] = useRecoilState(loggedUser)

    const handleLogoutBtn = (e: MouseEvent) => {
        e.preventDefault()

        fetch(
            'http://localhost:8000/login',
            {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    
                })
            }
        )
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                console.log(resp);
                if(resp.error){
                    alert(resp.error)
                 
                    navigate('/auth')
                }
                else{
                    setLoggedUser({email : resp.email,log_type:resp.role})
                    console.log("s2:" + loggedUser)
                    if(resp.role == "USER") navigate('/')
                    else navigate('/vendor')
                } 
            }).catch((err)=>{
                alert("Error: " + err);
            })

    }


    
  
    const [role, setRole] = useState<String>()

    

    const handleSignUpBtn = async (e: MouseEvent) => {

        // const phone = signupData.phone
        // const email = signupData.email
        // const name = signupData.name
        // const pass = signupData.pass
        // const rePass = signupData.rePass

        e.preventDefault()
    const resp = await fetch('http://localhost:8000/signup',

    {
        method: 'post',
        credentials: 'include',
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify({
           
        })
        
    }
    
).then((resp)=>{
    console.log(resp.json())
    alert("You have signed up successfully. Please Login!!")
    toggle()
    navigate('/auth')
    
}).catch((err)=>{
    alert("Error: " + err);
})


}

    
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
                        
                        <input type="submit" value="Logout"/>
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
                    <input type="submit"   value="Submit"/>
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