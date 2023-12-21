import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "./Config"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './Style.css'

const Home = () => {

    const navigate = useNavigate();

    const auth1 = getAuth();
    
        onAuthStateChanged(auth1, (user) => {
            if (user) {
            // User is signed in
                console.log("user is logined");
                
            } else {
            // User is signed out
                navigate('/Login') 
                console.log('User not sign in');   
            }
        });
        

    async function handleLogout(e) {
        e.preventDefault()
        try{
           await signOut(auth)
           window.sessionStorage.clear()
           navigate('/')
        }catch(err){
            console.log('error');
        }
        
    }

    return(
        <div className="home">
          <h1>Welcome to Home Page</h1>
          <button onClick={handleLogout}>LogOut</button>
        </div>
    )
}
export default Home