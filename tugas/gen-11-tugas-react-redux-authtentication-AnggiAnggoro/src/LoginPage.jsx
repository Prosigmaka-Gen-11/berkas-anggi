import { useState } from "react"
import { useSelector, useDispatch} from "react-redux"
import { afterLogin } from "./UserSlice"
import axios from 'axios'
import {Navigate, useNavigate} from 'react-router-dom'

export default function LoginPage () {
    const userSlice = useSelector(state => state.user)
    //const isLogin = useSelector(state => state.isLogin)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(e) {
        e.preventDefault()
        axios
            .post("https://dummyjson.com/auth/login", {
                username,
                password
            })
            .then((result) => {
                dispatch(afterLogin({
                    userData:(result.data),
                    token:(result.data.token)
                    
                }))
                console.log(result.data)
            })
    }
    
    if (userSlice.isLogin) {
        return <Navigate to="/" />;
      }

    return <>
    <h1>Login</h1>
    <form onSubmit={handleLogin}>
        <label>
            Username:
            <input
                required
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </label>
        <br/>
        <label>
            Password:
            <input
                required
                type="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
        </label>
        <br />
        <button>
            Login
        </button>
    </form>
    <p>atuny0</p>
    <p>9uQFF1Lh</p>
    </>


}