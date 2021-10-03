import React from 'react'
import logo from '../asset/logo.png'
import '../style/SignIn.css'


function SignIn() {
    return (
        <main>
            <div class="logo">
                <img src={logo} alt="" srcset=""/>
            </div>
            <div class="login-form">
            <h1>Login</h1>
            <form action="">
                <label for="username">Username</label>
                <input class="input-username" type="text" id="username" required/>
                <label for="password">Password</label>
                <input class="input-password" type="text" id="password" required/>
                <button>Login</button>
            </form>
            <div class="help-section">
                <a href="sign_up.html">Sign Up</a>
                <a href="">Lupa password</a>
            </div>
            </div>  
        </main>
    )
}

export default SignIn
