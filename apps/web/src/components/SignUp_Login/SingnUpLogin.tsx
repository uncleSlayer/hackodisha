import { useState } from "react"
import React , {useRef} from 'react'
import { MouseEvent } from "react"
import { useNavigate } from "react-router-dom"
import { loggedUser } from "store"
import { useRecoilState } from "recoil"


import '../../index.css'
import './Cstyle.css'
import LoginLogo from './login.jpg'
import SignupLogo from './signup.jpg'


const Login = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const navigate = useNavigate()

    const [loggedUserState, setLoggedUser] = useRecoilState(loggedUser)

    const handleLoginBtn = (e: MouseEvent) => {
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
                    email: email,
                    pass: pass
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
                    setEmail('')
                    setPass('')
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


    
    const [name, setName] = useState('')
    const [Email, setmail] = useState('')
    const [phone, setPhone] = useState('')
    const [Pass, setPassword] = useState('')
    const [rePass, setRePass] = useState('')
    const [role, setRole] = useState<String>()

    const handleChangeRole = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRole(event.target.value)
        console.log(role)
    }

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
            phone: phone,
            email: Email,
            name: name,
            pass: Pass,
            rePass: rePass,
            role: role
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
                        <h2>Sign In</h2>
                        <input type="text" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)}/>
                        <input type="submit" onClick={handleLoginBtn} value="Login"/>
                        <p className="signup">don't have an account? <span  onClick={toggle} >Sign up.</span></p>
                    </form>
                </div>
            </div>
            
           

            <div className="user signupBx">
                <div className="formBx">
                    <form className="f"action="">
                    <h2 className="header">Create an Account</h2>
                    <input type="text" placeholder="Email" value={Email} onChange={(e) => setmail(e.target.value)}/>
                    <input type="text" placeholder="Username"  value={name} onChange={(e) => setName(e.target.value)}/> 
                    <input type="number" placeholder="Phone" className="border" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <input type="password" placeholder="Create Password" value={Pass} onChange={(e) => setPassword(e.target.value)}/>
                    <input type="password" placeholder="Confirm Password" value={rePass} onChange={(e) => setRePass(e.target.value)}/>
                    <div className="type">
                    
                            <label className="radio_container">User <input type="radio" id="User"
                                onChange={handleChangeRole}
                                name="role" value="USER" /></label>
                            
                            <label className="radio_container" htmlFor="vendor">Vendor<input type="radio" id="Vendor"
                                onChange={handleChangeRole}
                                name="role" value="VENDOR" /></label>
                    </div>
                    <input type="submit" onClick={(e)=>{
                        handleSignUpBtn(e);
                    }}  value="Sign Up"/>
                    <div className="signin">already have an account? <span onClick={toggle}>Sign In</span></div>
                    
                    </form>
                </div>
                <div className="imgBx"><img src={SignupLogo}/></div>
            </div>   
        </div>

        </div>
    )

}

export default Login