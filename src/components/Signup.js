import React from 'react'
import { useNavigate } from 'react-router-dom'

        export default function Signup(props) {


            let navigate = useNavigate();

            const handleSubmit = event => {
                event.preventDefault();

                let password = event.target.password.value;
                let confirmPassword = event.target.confirmPassword.value;

                if (password !== confirmPassword){

                    console.log('passwords do not match')
                    props.flashMessage('Your passwords do not match ya dingus', 'danger')
                } else {
                    console.log('Potatos')
                    let myHeaders = new Headers();
                    myHeaders.append('Content-Type', 'application/json');

                    let formData = JSON.stringify({username: event.target.username.value,
                    email: event.target.email.value,
                    password: password
                    })

                    fetch('https://kekambas-blog.herokuapp.com/auth/users',{
                        method: 'POST',
                        headers: myHeaders,
                        body: formData
                    })

                    .then(res => res.json())
                    .then(data => {
                        if (data.error){

                        } else {
                            props.flashMessage('You have successfully created a new account!')
                            navigate('/')
                        }
                    })


                }

            }


            return (

                <>
                    <h4 className="text-center"> Sign Up Here!!</h4>
                    <form>
                        <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type='text' className='form-control' placeholder='Enter Email' name ='email' />

                        <label htmlFor="Username">Username</label>
                        <input type='text' className='form-control' placeholder='Enter Username' name ='username' />

                        <label htmlFor="password">Password</label>
                        <input type='text' className='form-control' placeholder='Enter Password' name ='password' />

                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type='text' className='form-control' placeholder=' Please Re-enter Password' name ='confirmPassword' />

                        <input type='submit' className='btn btn-dark w-75 mt-3' value='Sign Up' />
                        
                        </div>
                    </form>
                </>
            )



        }