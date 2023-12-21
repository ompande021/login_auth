import {BrowserRouter,Routes,Route} from 'react-router-dom'
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
export default App