import { useState } from "react"
import { MouseEvent } from "react"
import { useNavigate } from "react-router-dom"
import { loggedUser } from "store"
import { useRecoilState } from "recoil"
import { Link } from 'react-router-dom';

import '../../index.css'
import './auth.css'


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
                setLoggedUser(resp.email)
                navigate('/')
            })

    }

    return (
        <div className="wraper">
            <form className="sectionL" action="">
                <p>email</p>
                <input type="text" className="border" value={email} onChange={(e) => setEmail(e.target.value)} />

                <p>pass</p>
                <input type="text" className="border" value={pass} onChange={(e) => setPass(e.target.value)} />

                <button onClick={handleLoginBtn}>Log in</button>
                <Link to="/signup">
                    <button >signup</button>
                </Link>
            </form>
            <div className="sectionR"></div>

        </div>
    )
}

export default Login