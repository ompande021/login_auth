import { Link } from "react-router-dom"
import { useState } from "react"
import { auth } from "./Config";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import './Style.css'

const Login = () => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const navigate = useNavigate();

        async function handleSubmit(e){
            e.preventDefault()
            try{
                const userCredential = await signInWithEmailAndPassword(auth,email,password)
                const user = userCredential.user
                console.log(user);
                alert("Login Successful")
                console.log("Well done boy, You done great job!!")
                navigate('/Home')

            }catch(err){
                console.log("error");
                alert('wrong email or password ')
            }
        }

    return(
        <div className="main1">
            <div className="card">
                <h2>LogIn Page</h2>
                <form onSubmit={handleSubmit}>
                    <br /><br />
                    <label>Email :</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="Email" placeholder="Enter your Email" />
                    <br /><br />
                    <label>Password :</label>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Set Password" />
                    <br /><br />
                    <button type="submit">Login</button>
                    <br /><br />
                    <span>Not have an Account? <Link to='/' id="link">Signup</Link></span>
                </form>
            </div>
        </div>
    )
}
export default Login