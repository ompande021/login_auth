import { Link } from "react-router-dom"
import { useState } from "react"
import { auth } from "./Config";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import './Style.css'

const Signup = () => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const navigate = useNavigate();

        async function handleSubmit(e){
            e.preventDefault()
            try{
                const userCredential = await createUserWithEmailAndPassword(auth,email,password)
                const user = userCredential.user
                console.log(user);
                alert("Created successfully")
                navigate('/Login')

            }catch(err){
                console.log("error");
            }
        }

    return(
        <div className="main1">
            <div className="card">
                <h2>Sign up</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name :</label>
                    <input type="text" placeholder="Enter your Name" />
                    <br /><br />
                    <label>Email :</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="Email" placeholder="Enter your Email" />
                    <br /><br />
                    <label>Set Password :</label>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Set Password" />
                    <br />
                    <span>(password should be atlast 6 charaters)</span>
                    <br /><br /><br />
                    <button type="submit">Signup</button>
                    <br /><br />
                    <span>Already have account? <Link to='/Login' id="link">Login</Link></span>
                </form>
            </div>
        </div>
    )
}
export default Signup



/*import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './FireBase Login Signup/Signup'
import Login from './FireBase Login Signup/Login'
import Home from './FireBase Login Signup/Home'




const App = () => {

    return(
        <div>
          <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Signup/>}/>
                    <Route path='/Login' element={<Login/>}/>

                    <Route path='/Home' element={<Home/>}/>

                    <Route path='*' element={<h1>404 Error</h1>}/>
                </Routes>
          </BrowserRouter>
        </div>
    )
}
export default App*/