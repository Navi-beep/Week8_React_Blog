import React from 'react'

import { useNavigate } from 'react-router-dom'

export default function Login(props) {

    let navigate = useNavigate();

    const handleSubmit = async event => {
        event.preventDefault();

        let username = event.target.username.value;
        let password = event.target.password.value;

        let myHeaders = new Headers();
        myHeaders.append('Authorization', 'Basic' + btoa(`${username}:${password}`))

        let response = await fetch('https://kekambas-blog.herokuapp.com/auth/me', {headers:myHeaders});

        if (response.ok){

            let data = await response.json();
            localStorage.setItem('token', data.token);
            localStorage.setItem('expiration', data.token_expiration);

            props.login();

            props.flashMessage('You have logged in! Welcome to the Jungle', 'success');
            navigate('/');
        } else {
            props.flashMessage('Stop being a dingus and put the right username/password in', 'danger');
        }


    }

    return (
        <>
        <h3 className="h3 text-center">Login Ya Dingus</h3>

        <form id="Form1" onSubmit={handleSubmit}>
                        <div className="form-group">
                        

                        <label htmlFor="Username">Username</label>
                        <input type='text' className='form-control' placeholder='Enter Username' name ='username' />

                        <label htmlFor="password">Password</label>
                        <input type='password' className='form-control' placeholder='Enter Password' name ='password' />

                        <input type='submit' className='btn btn-dark w-50 mt-3' value='Login ' />
                        
                        </div>
                    </form>
                
        
        
        
        
        </>
    )

}