import React from 'react'
import { useNavigate } from 'react-router-dom'

        export default function Signup(props) {






            




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