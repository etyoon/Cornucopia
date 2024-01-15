import {useState} from 'react'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <div>
            <div className = 'signin_container'>
                <h1>Cornucopia</h1>
                <p>Welcome back!</p>
                <h2>Log In</h2>
                <form className = 'login' onSubmit = {handleSubmit}>
                    <h3>Email</h3>
                    <input 
                        type = 'text' 
                        class = 'email' 
                        placeholder='Enter Email'
                        onChange = {(e)=> setEmail(e.target.value)}
                        value = {email}></input>
                    <h3>Password</h3>
                    <input type = 'password' class = 'email' placholder = 'Enter Password'
                    onChange = {(e)=> setPassword(e.target.value)}
                    value = {password}></input>
                    <button disabled = {isLoading} className = 'login_button'>Login</button>
                    {error && <div className = "error">{error}</div>}
                </form>
            </div>
            <img className = 'login_image' src = {require('../static/image.png')}></img>
        </div>
    
    )
}

export default Login