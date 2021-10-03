import React from 'react'
import logo from '../asset/logo.png'
import '../style/SignUp.css'


function SignUp() {
    return (
        <main>
            <div class="logo">
                <a href=""><img src={logo} alt="" srcset=""/></a>
            </div>
            <div class="signup-form">
                <h1>Sign Up</h1>
                <form action="">
                    <label for="username">Username</label>
                    <input class="input-username" type="text" id="username" placeholder="   username" required/>
                    <label for="password">Password</label>
                    <input class="input-password" type="text" id="password" placeholder="   password" required/>
                    <label for="confirm-password">Confirm password</label>
                    <input class="input-confirm-password" type="text" id="confirm-password" placeholder="confirm password"
                    required/>
                    <button>Sign Up</button>
                </form>
                <div class="help-section">
                <p>Sudah punya akun? <a href="sign_in.html">Sign In</a></p>
            </div>
        </div>
    </main>
    )
}

export default SignUp
