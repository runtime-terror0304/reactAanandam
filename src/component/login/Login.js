import React from 'react'

import LoginCSS from "./app.module.css"

import Home from '../home/Home';

const Login = () => {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [user, setUser] = React.useState('');

    const registerUser = async (event) => {
        event.preventDefault();
        // console.log(name);
        // console.log(email);
        // console.log(password);

        const response = await fetch('https://lit-caverns-66323.herokuapp.com/register', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": name,
                "password": password,
                "email": email,
                "image": "kutta"
            })
        })

        const data = await response.json();

        console.log(data);

        setUser(data);

        if(data.accessToken == null)
        {
            alert('This email is already registered, please use another! or login if you are already registered');
            setName('');
            setEmail('');
            setPassword('');
        }
        else{
            localStorage.setItem('dat', JSON.stringify(data));
            alert('Login Success');
            window.location.href = '/';
        }
    }

    const loginUser = async (event) => {
        event.preventDefault();
        // console.log(name);
        // console.log(email);
        // console.log(password);

        const response = await fetch('https://lit-caverns-66323.herokuapp.com/login', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "password": password,
                "email": email,
            })
        })

        const data = await response.json();

        console.log(data);

        if(data.accessToken == null)
        {
            alert('Please enter valid credentials!');
            setName('');
            setEmail('');
            setPassword('');
        }
        else{
            localStorage.setItem('dat', JSON.stringify(data));
            alert('Login Success');
            window.location.href = '/';
        }
    }

  return (
    <>
        <body className={LoginCSS.bdy}>
        <div className={LoginCSS.main}>  	
            <input className={LoginCSS.inp} type="checkbox" id={LoginCSS.chk} aria-hidden="true"></input>

                <div className={LoginCSS.signup}>
                    <form  onSubmit={registerUser}>
                        <label className={LoginCSS.lbl} for={LoginCSS.chk} aria-hidden="true">Sign up</label>
                        <input className={LoginCSS.inp} type="text" placeholder="User name" required="" value = {name} onChange = {(e) => setName(e.target.value)}></input>
                        <input className={LoginCSS.inp} type="email" placeholder="Email" required="" value = {email} onChange = {(e) => setEmail(e.target.value)}></input>
                        <input className={LoginCSS.inp} type="password" placeholder="Password" required="" value = {password} onChange = {(e) => setPassword(e.target.value)}></input>
                        <button className={LoginCSS.btn}>Sign up</button>
                    </form>
                </div>

                <div className={LoginCSS.login}>
                    <form onSubmit={loginUser}>
                        <label className={LoginCSS.lbl} for={LoginCSS.chk} aria-hidden="true">Login</label>
                        <input className={LoginCSS.inp} type="email" name="email" placeholder="Email" required=""
                        value = {email} onChange = {(e) => setEmail(e.target.value)}></input>
                        <input className={LoginCSS.inp} type="password" name="pswd" placeholder="Password" required=""
                        value = {password} onChange = {(e) => setPassword(e.target.value)}></input>
                        <button className={LoginCSS.btn}>Login</button>
                    </form>
                </div>
        </div>
        </body> 
    </>
  )
}

export default Login;