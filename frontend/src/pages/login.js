import {useState} from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
    }

    return (
        <div>
            <div class = 'signin_container'>
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
                    <button className = 'login_button'>Login</button>
                </form>
            </div>
            <img className = 'login_image' src = {require('../static/image.png')}></img>
        </div>
    
    )
}

export default Login