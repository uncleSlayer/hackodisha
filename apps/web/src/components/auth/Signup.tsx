import { useState } from "react"
import { MouseEvent } from "react"

const Signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [pass, setPass] = useState('')
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
                credentials:'include',
                headers: {
                    'Content-type': 'Application/json'
                },
                body: JSON.stringify({
                    phone: phone,
                    email: email,
                    name: name,
                    pass: pass,
                    rePass: rePass,
                    role: role
                })
            }
        )

        console.log(resp.json())

    }

    // phone, email, naam, password, re enter password  
    return (
        <div className="mt-10">
            <form action="">
                <p>name</p>
                <input type="text" className="border" value={name} onChange={(e) => setName(e.target.value)} />

                <p>email</p>
                <input type="text" className="border" value={email} onChange={(e) => setEmail(e.target.value)} />

                <p>phone</p>
                <input type="number" className="border" value={phone} onChange={(e) => setPhone(e.target.value)} />

                <p>pass</p>
                <input type="text" className="border" value={pass} onChange={(e) => setPass(e.target.value)} />

                <p>re enter pas</p>
                <input type="text" className="border" value={rePass} onChange={(e) => setRePass(e.target.value)} />
                <br />

                <input type="radio" id="User"
                onChange={handleChangeRole}
                name="role" value="USER" />
                <label htmlFor="user">User</label>
                <input type="radio" id = "Vendor"
                onChange={handleChangeRole}
                name="role" value="VENDOR" />
                <label htmlFor="vendor">Vendor</label>
                <br />
                {role && <h2>{role}</h2>}
    

                <button type="submit" onClick={handleSignUpBtn}>Signup</button>
            </form>
        </div>
    )
}

export default Signup