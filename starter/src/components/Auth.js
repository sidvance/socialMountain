import {useState} from 'react'
import axios from 'axios'
import { useContext } from 'react'
import AuthContext from '../store/authContext'
 
const Auth = () => {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [register, setRegister] = useState(true)

   const authCtx = useContext(AuthContext)
 
   const submitHandler = e => {
       e.preventDefault()
 
       console.log('submitHandler called')

       const url = 'https://socialmtn.devmountain.com'

       const body = {username, password}

       axios.post(register ? `${url}/reigster` : `${url}/login`, body)
            .then(res => {
                console.log('authing!!!', res.data)
                authCtx.login(res.data.token, res.data.exp, res.data.userId)
            }) 
            .catch(theseHands => 
                console.log(theseHands),
                setPassword(''),
                setUsername(''))
                

   }

   return (
       <main>
           <h1>Welcome!</h1>
           <form className='form auth-form' onSubmit={submitHandler}>
               <input
                   className='form-input' type="text" placeholder="Username" value={username}
                   onChange={e => setUsername(e.target.value)}/>
               <input
                   className='form-input' type="text" placeholder="Password" value={password}
                   onChange={e => setPassword(e.target.value)}/>
               <button className='form-btn'>
                   {register ? 'Sign Up' : 'Login'}
               </button>
           </form>
           <button className='form-btn' onClick={() => {console.log("clickRegister"); setRegister(!register)}}>
                Need to {register ? 'Login' : 'Sign Up'}?
           </button>
       </main>
   )
}
 
export default Auth