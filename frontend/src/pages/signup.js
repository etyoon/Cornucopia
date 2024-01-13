import {useState} from 'react'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
    }

    return (
        <div class = 'signup'>
            <h1>Cornucopia</h1>
            <h2>Sign Up</h2>
            <form className = 'signupForm' onSubmit={handleSubmit}>
                <h3>Email:</h3>
                <input 
                    type = 'text' 
                    class = 'signup_info'
                    onChange = {(e)=> setEmail(e.target.value)}
                    value = {email}/>
                <h3>Password:</h3>
                <input 
                    type = 'text' 
                    class = 'signup_info' 
                    onChange = {(e)=> setPassword(e.target.value)}
                    value = {password}/>
                <button>Sign Up</button>
            </form>
        </div> 
    )
}

export default Signup